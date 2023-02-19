<?php

require "connection.php";

//$table = $_POST['table'] ?? '';
$table = $_POST["table"];

//$query = $conn->prepare("SELECT * FROM $table");
$query = $conn->prepare("SELECT Morale FROM Morali WHERE Storia = :title");
//$query = $conn->prepare("SELECT Morale FROM Morali WHERE Storia = `$table`");
$query->bindParam(':title', $table);
$query->execute();
//$result = $query->fetchAll(PDO::FETCH_ASSOC);
$result = $query->fetch(PDO::FETCH_ASSOC);
//$json = json_encode($resultArray);
//echo json_encode($result);
echo $result["Morale"];

$conn=null;
?>