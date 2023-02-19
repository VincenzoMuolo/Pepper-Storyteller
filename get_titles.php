<?php
require "connection.php";
$query = $conn->prepare("SELECT Titolo FROM Storie");
$query->execute();
$result = $query->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);
$conn=null;
?>