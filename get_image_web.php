<?php 
    session_start();  
    require_once('connection.php');
    $title= $_GET['name'];
    $mySelectStatement = $conn->prepare("SELECT Immagine, tipo FROM `$title`");
    $mySelectStatement->execute();
    $images = $mySelectStatement->fetchAll(PDO::FETCH_ASSOC);
    $base64=0;
    foreach($images as $image){
    	if($image["Immagine"]!=null){
        	//Provo a convertire in base 64
			$type = pathinfo($image, PATHINFO_EXTENSION);
    		$base64 = 'data:image/' . $type . ';base64,' . base64_encode($image["Immagine"]);
            break;
        }
    }
    echo $base64;
    $conn=null;
?>


