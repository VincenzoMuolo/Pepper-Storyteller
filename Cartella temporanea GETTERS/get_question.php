<?php

require "connection.php";

// Verifica se le variabili POST sono state inviate
if (isset($_POST["table"]) && isset($_POST["id"])) {
    $table = $_POST["table"];
    $id = $_POST["id"];
	$id = $id+1;//Aumento l'id di 1 dato che l'elemento parte da 0
    // Prepara la query utilizzando dichiarazioni preparate
    $query = $conn->prepare("SELECT * FROM Domande WHERE Storia = :story AND IdParagrafo = :idPar");
    $query->bindParam(':story', $table);
    $query->bindParam(':idPar', $id);
    $query->execute();

    // Ottieni il risultato della query
    $result = $query->fetch(PDO::FETCH_ASSOC);

    // Restituisci il risultato come JSON
    echo json_encode($result);
} else {
    // Se le variabili POST mancano, restituisci un messaggio di errore
    echo json_encode(array('error' => 'Parametri mancanti'));
}

// Chiudi la connessione al database
$conn=null;
?>
