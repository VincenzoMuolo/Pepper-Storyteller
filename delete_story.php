<?php

session_start();
require_once('connection.php');

if($_SERVER["REQUEST_METHOD"] == "POST") {
	$title = $_POST["name"];
    
    $mySelectStatement = $conn->prepare("SELECT Username FROM `Storie` WHERE Titolo = :title");
    $mySelectStatement->bindParam(':title', $title);
    $mySelectStatement->execute();
    $result = $mySelectStatement->fetch(PDO::FETCH_ASSOC);
    $username = $result['Username'];
                        
    $mySelectStatement = $conn->prepare("SELECT Email FROM Utenti WHERE Username = :username");
    $mySelectStatement->bindParam(':username', $username);
    $mySelectStatement->execute();
    $result = $mySelectStatement->fetch(PDO::FETCH_ASSOC);
    $email = $result['Email'];
    
    $myDeleteStatement = $conn->prepare("DELETE FROM `Storie` WHERE Titolo = :title");
    $myDeleteStatement->bindParam(':title', $title);
    if($myDeleteStatement->execute()) {
    	$my_Delete_Statement = $conn->prepare("DROP TABLE `$title`");
    	if($my_Delete_Statement->execute()) {
            $str = "Ciao $username!\nLa tua storia '$title' è stata eliminata con successo.\nIl team Pepper4Storytelling.\n";
            $msg = utf8_decode($str);
            mail($email, "Storia eliminata", $msg);
            header("location: profile.php"); 
         } else {
         	echo "<script type='text/javascript'>alert(\"Si è verificato un errore nella rimozione della storia\")</script>";
         }
	} else {
    	echo "<script type='text/javascript'>alert(\"Si è verificato un errore nella rimozione della storia\")</script>";
    }
    
}

$conn = null;

?>