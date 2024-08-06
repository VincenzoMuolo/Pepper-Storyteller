<?php

require "connection.php";

// Verifica se le variabili POST sono state inviate
if (isset($_POST["story"])) {
    $table = $_POST["story"];
    // Prepara la query utilizzando dichiarazioni preparate
    $query = $conn->prepare("SELECT Tipo FROM TipoPubblicazione WHERE Storia = :story");
    $query->bindParam(':story', $table);
    $query->execute();

    // Ottieni il risultato della query
    $result = $query->fetch(PDO::FETCH_ASSOC);

    // Restituisci il risultato come JSON
    echo json_encode($result);
} else {
    // Se le variabili POST mancano, restituisci un messaggio di errore
    echo json_encode(["error" => "Storia non trovata"]);
}

// Chiudi la connessione al database
$conn = null;
?>
