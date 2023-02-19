<?php
	require_once('connection.php');
	$story_name=$_POST['name'];
	$mySelectStatement = $conn->prepare("SELECT Morale FROM Morali WHERE Storia = :story");
    $mySelectStatement->bindParam(':story', $story_name);
    $mySelectStatement->execute();
   	$result = $mySelectStatement->fetch(PDO::FETCH_ASSOC);
    echo $result["Morale"];
?>