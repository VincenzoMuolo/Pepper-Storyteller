<?php

require "connection.php";

$story = $_POST["story"];

// Prepara la query utilizzando dichiarazioni preparate
$query = $conn->prepare("SELECT * FROM Esiti WHERE Storia = :story ORDER BY Acquisizione DESC, idParagrafo ASC");
$query->bindParam(':story', $story);
$query->execute();

$results = $query->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($results);

// Chiudi la connessione al database
$conn = null;
?>
