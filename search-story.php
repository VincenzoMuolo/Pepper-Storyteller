<?php
session_start();
require_once('connection.php');

$title= $_GET['story'];

$mySelectStatement = $conn->prepare("SELECT * FROM Storie WHERE Titolo LIKE '%$title%'");
$mySelectStatement->execute();
$userStoriesResult = $mySelectStatement->fetchAll(PDO::FETCH_ASSOC);

$num = $mySelectStatement->rowCount();
$null = NULL;
if ($num) {
	echo json_encode($userStoriesResult);
}else{
	echo json_encode($null);
}
$conn=null;


?>