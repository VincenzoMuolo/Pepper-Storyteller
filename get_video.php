<?php 
session_start();
require_once('connection.php');

$query = "SELECT * FROM `Prova video grande` WHERE id = 2";
$stmt = $conn->prepare($query);
$stmt->execute();
 
// to verify if a record is found
$num = $stmt->rowCount();
 
if ($num) {
    // if found
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
   
    header("Content-type: video/mp4");
 	print $row['Video'];   
   
    exit;
} else {
    echo "Nessun video trovato";
}

?>



