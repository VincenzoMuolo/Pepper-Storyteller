<?php 

require_once('connection.php');

$table = $_GET["table"];
$id = $_GET["id"];

//$query = "SELECT * FROM `Prova storia audio` WHERE id = 1";
$query = "SELECT * FROM `provaaudio` WHERE id = 1";
$stmt = $conn->prepare($query);
$stmt->execute();
 
// to verify if a record is found
$num = $stmt->rowCount();
 
if ($num) {
    // if found
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    //header("Content-type: video/mp4");
    header("Content-type: audio/mp3");
 	//print $row['Audio'];
    //PROVARE CON ECHO ANZICHE' PRINT (ULTIMA CHANCE)
    echo $row['Audio'];
   
    exit;
} else {
    echo "Nessun audio trovato";
}
$conn=null;
?>