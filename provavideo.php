<?php
	require_once('connection.php');
    
    // Verifico eventuali problemi nell'upload del file
    if (isset($_POST['submit'])) {
    	$maxsize = 5242880; //MAX 5MB
        
     	
        
        if (isset($_FILES['video']['name']) && $_FILES['video']['name'] != '') {
        	$nome_file_vero = $_FILES["video"]["name"];
            $nome_file_temporaneo = $_FILES["video"]["tmp_name"];
            $tipo_file = $_FILES["video"]["type"];
            //$extensions_arr = array("mp4", "avi", "3gp", "mov", "mpeg"); //inutile se non si mette controllo
            if ($_FILES['video']['size'] >= $maxsize) {
            	$_SESSION['message'] = "File too large. File must be less then 5MB.";
            } else {
            	$dati_file = file_get_contents($nome_file_temporaneo);
                $my_Insert_Statement = $conn->prepare("INSERT INTO ProvaVideo (Video, nome, tipo) VALUES (:dati_file, :nome_file_vero, :tipo_file)");
                $my_Insert_Statement->bindParam(':dati_file', $dati_file);
    			$my_Insert_Statement->bindParam(':nome_file_vero', $nome_file_vero);
    			$my_Insert_Statement->bindParam(':tipo_file', $tipo_file);
    			if ($my_Insert_Statement->execute()) {
        			console.log("Paragrafo pubblicato correttamente.");
				} else {
  					console.log("Errore nella pubblicazione del paragrafo");
				}
            }
            
        } else {
        	$_SESSION['message'] = "Please select a file";
        }
    }
?>

<html>
<body>

	<form method="post" action="" enctype="multipart/form-data">
	<input type="file" name="video"><br>
	<input type="submit" name="submit" value="Upload">
	</form>

</body>
</html>