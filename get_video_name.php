<?php

require "connection.php";

$table = $_POST["table"];

$query = $conn->prepare("SELECT NomeVideo FROM `$table`");
$query->execute();
$result = $query->fetchAll(PDO::FETCH_ASSOC);
//$json = json_encode($resultArray);
echo json_encode($result);

$conn=null;
?>