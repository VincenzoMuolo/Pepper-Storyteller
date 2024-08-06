<?php
    session_start();

    require_once('connection.php');

    $story = $_GET['name'];
	$mySelectStatement = $conn->prepare("SELECT * FROM Domande WHERE Storia = :story");
    $mySelectStatement->bindParam(':story', $story);
    $mySelectStatement->execute();
    $results = $mySelectStatement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results);
?>