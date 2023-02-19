<?php 

require_once('connection.php');

//$table = $_POST["table"];
//$id = $_POST["id"];
//$table = $_GET["table"];
//$id = $_GET["id"];

//$query = "SELECT * FROM `$table` WHERE id = $id+1";
$query = "SELECT * FROM ProvaVideo WHERE id = 1";
$stmt = $conn->prepare($query);
$stmt->execute();
 
// to verify if a record is found
$num = $stmt->rowCount();
 
if ($num) {
    // if found
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    //fetchAll???
   
    header("Content-type: video/mp4");
 	print $row['Video'];   
    //$json = json_encode($row);
	//echo json_encode($row);
   
    exit;
} else {
    echo "Nessun video trovato";
}
$conn=null;
?>