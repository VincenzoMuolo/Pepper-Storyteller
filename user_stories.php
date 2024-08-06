<?php

session_start();

require_once('connection.php');

$mySelectStatement = $conn->prepare("SELECT storie.*, tipo.Tipo 
    FROM `Storie` storie
    JOIN `TipoPubblicazione` tipo ON storie.Titolo = tipo.Storia
    WHERE storie.Username = :username
");
$mySelectStatement->bindParam(':username', $_SESSION["Username"]);
$mySelectStatement->execute();
$userStoriesResult = $mySelectStatement->fetchAll(PDO::FETCH_ASSOC);
//$json = json_encode($resultArray);
echo json_encode($userStoriesResult);

$conn=null;


?>
