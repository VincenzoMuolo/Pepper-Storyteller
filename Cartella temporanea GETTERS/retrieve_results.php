<?php
require_once('connection.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (is_array($data)) {
        foreach ($data as $row) {
            $storyTitle = $row['storyTitle'];
            $idParagrafo = $row['idParagrafo'];
            $esito = $row['esito'];

            if (!empty($storyTitle) && !empty($idParagrafo) && !empty($esito)) {
                $stmt = $conn->prepare("INSERT INTO Esiti (Storia, idParagrafo, EsitoRisp) VALUES (:storyTitle, :idParagrafo, :esito)");
                $stmt->bindParam(':storyTitle', $storyTitle);
                $stmt->bindParam(':idParagrafo', $idParagrafo);
                $stmt->bindParam(':esito', $esito);
                $stmt->execute();
            }
        }
        echo json_encode(["status" => "success", "message" => "Esiti salvati con successo"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Dati non validi"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Metodo di richiesta non valido"]);
}
?>

