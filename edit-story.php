<?php

session_start();

require_once('connection.php');
if($_SERVER["REQUEST_METHOD"] == "POST") {
	$title = $_POST["story_title"] ?? '';
    $moral = $_POST['moral'] ?? '';
	$titleTemp = $title . " (Modifica)";
    $myCreateStatement = "CREATE TABLE `$titleTemp` (
								 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
								 Testo VARCHAR(1000) NOT NULL,
								 Immagine LONGBLOB NULL,
								 NomeImmagine VARCHAR(255) NULL,
								 TipoImmagine VARCHAR(255) NULL,
                                 Colore VARCHAR(7) NULL,
                                 Video LONGBLOB NULL,
                                 NomeVideo VARCHAR(255) NULL,
								 TipoVideo VARCHAR(255) NULL,
                                 Audio LONGBLOB NULL,
								 NomeAudio VARCHAR(255) NULL,
								 TipoAudio VARCHAR(255) NULL,
                                 `Elimina Immagine` VARCHAR(5) NULL
								 )";


	if(!$conn->exec($myCreateStatement)) {
    	$counter = 0;
    	foreach ($_POST['paragraph'] as $textArea) {              
    		// Verifico eventuali problemi nell'upload del file immagine
    		if (!isset($_FILES["images"]) || $_FILES["images"]["error"][$counter] != UPLOAD_ERR_OK) 
    			console.log( "Errore nell'invio del file. Riprova!");
    		// Recupero delle informazioni sul file immagine inviato
			$nome_file_temporaneo = $_FILES["images"]["tmp_name"][$counter];
			$nome_file_vero = $_FILES["images"]["name"][$counter];
			$tipo_file = $_FILES["images"]["type"][$counter];    
    
    		// Leggo il contenuto del file immagine
			$dati_file = file_get_contents($nome_file_temporaneo);

			// Preparo il contenuto del file per la query sql
			//$dati_file = addslashes($dati_file);
            
            
            if (!isset($_FILES["video"]) || $_FILES["video"]["error"][$counter] != UPLOAD_ERR_OK) 
            	console.log( "Errore nell'invio del file. Riprova!");                       
                    
            if ($_FILES["video"]["size"][$counter] >= $maxsize) {
            	$_SESSION["message"] = "File troppo grande. La dimensione deve essere inferiore a 5MB.";
            }
                    
            // Recupero delle informazioni sul file video inviato
            $nome_file_vero_video = $_FILES["video"]["name"][$counter];
			$nome_file_temporaneo_video = $_FILES["video"]["tmp_name"][$counter];					
			$tipo_file_video = $_FILES["video"]["type"][$counter];
                    
            // Leggo il contenuto del file video
			$dati_file_video = file_get_contents($nome_file_temporaneo_video);
                             
                    
            if (!isset($_FILES["audio"]) || $_FILES["audio"]["error"][$counter] != UPLOAD_ERR_OK) 
            	console.log( "Errore nell'invio del file. Riprova!");                       
                    
            if ($_FILES["audio"]["size"][$counter] >= $maxsize) {
            	$_SESSION["message"] = "File troppo grande. La dimensione deve essere inferiore a 5MB.";
            }
                    
            // Recupero delle informazioni sul file audio inviato
            $nome_file_vero_audio = $_FILES["audio"]["name"][$counter];
			$nome_file_temporaneo_audio = $_FILES["audio"]["tmp_name"][$counter];					
			$tipo_file_audio = $_FILES["audio"]["type"][$counter];
                    
            // Leggo il contenuto del file
			$dati_file_audio = file_get_contents($nome_file_temporaneo_audio);
            
                    
    		//INVIO COLORE
    		$color = $_POST["colors"][$counter];
                    
    		//INVIO FLAG ELIMINAZIONE IMMAGINE
    		$img_delete = $_POST["image_state"][$counter];
    		$c_temp=$counter+1;
    		echo "Paragrafo ". $c_temp . "  ";
    		echo $nome_file_vero ."\r\n";
             
			$my_Insert_Statement = $conn->prepare("INSERT INTO `$titleTemp` (Testo, Immagine, NomeImmagine, TipoImmagine, Colore, Video, NomeVideo, TipoVideo, Audio, NomeAudio, TipoAudio, `Elimina Immagine`) VALUES (:paragraph, :dati_file, :nome_file_vero, :tipo_file, :color, :dati_file_video, :nome_file_vero_video, :tipo_file_video, :dati_file_audio, :nome_file_vero_audio, :tipo_file_audio, :img_delete)");
    		$my_Insert_Statement->bindParam(':paragraph', $textArea);
    		$my_Insert_Statement->bindParam(':dati_file', $dati_file);
    		$my_Insert_Statement->bindParam(':nome_file_vero', $nome_file_vero);
    		$my_Insert_Statement->bindParam(':tipo_file', $tipo_file);
    		$my_Insert_Statement->bindParam(':color', $color);
            $my_Insert_Statement->bindParam(':dati_file_video', $dati_file_video);
    		$my_Insert_Statement->bindParam(':nome_file_vero_video', $nome_file_vero_video);
    		$my_Insert_Statement->bindParam(':tipo_file_video', $tipo_file_video);
            $my_Insert_Statement->bindParam(':dati_file_audio', $dati_file_audio);
    		$my_Insert_Statement->bindParam(':nome_file_vero_audio', $nome_file_vero_audio);
    		$my_Insert_Statement->bindParam(':tipo_file_audio', $tipo_file_audio);
    		$my_Insert_Statement->bindParam(':img_delete', $img_delete);
			if ($my_Insert_Statement->execute()) {
    			console.log("Paragrafo pubblicato correttamente.");                                                                         
			} else {
  				console.log("Errore nella pubblicazione del paragrafo");
			}
    		$counter++;
		}//fine for each                                             
    }
		   
	$mySelectStatement = $conn->prepare("SELECT Username FROM Storie WHERE Titolo = :title");
    $mySelectStatement->bindParam(':title', $title);
    $mySelectStatement->execute();
	$result = $mySelectStatement->fetch(PDO::FETCH_ASSOC);
    $username = $result['Username'];

	$my_Insert_Statement = $conn->prepare("INSERT INTO `Storie Temp` (Titolo, Username) VALUES (:titleTemp, :username)");
    $my_Insert_Statement->bindParam(':titleTemp', $titleTemp);
    $my_Insert_Statement->bindParam(':username', $username);
    if ($my_Insert_Statement->execute()) {
           $my_Insert_Statement = $conn->prepare("INSERT INTO `Morali` (Storia, Morale) VALUES (:title, :moral)");
           $my_Insert_Statement->bindParam(':title', $titleTemp);
           $my_Insert_Statement->bindParam(':moral', $moral);
           $my_Insert_Statement->execute();
                    
           $mySelectStatement = $conn->prepare("SELECT Email FROM Utenti WHERE Username = :username");
           $mySelectStatement->bindParam(':username', $username);
           $mySelectStatement->execute();
           $result = $mySelectStatement->fetch(PDO::FETCH_ASSOC);
           $email = $result['Email'];

           $str = "Ciao $username!\nLa modifica della tua storia '$title' è stata inviata correttamente. Un amministratore eseguirà un controllo sul materiale inviato per accertarsi che la storia sia coerente e soprattuto priva di contenuti inappropriati.\nRiceverai comunicazione quando la modifica della storia sarà approvata.\nIl team Pepper4Storytelling.\n";
           $msg = utf8_decode($str);
           mail($email, "Attesa modifica", $msg);
           //Redirect storia modificata correttamente
           header("location: edit-story-confirm.html");
    }               
}
unset($_SESSION['counter']);
$conn = null;
?>

<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel="stylesheet" href="background.css">
        <link rel="stylesheet" href="navbar.css">
        <link rel="stylesheet" href="new-story.css">   
        <link rel="stylesheet" href="alert-confirm.css">
        <script src="script.js"></script>
        <script src="animation.js"></script>
        <script src="create-paragraph.js"></script>
        <script src="story_input_check.js"></script>
        <script src="alert.js"></script>

        <title>Pepper storyteller</title>
    </head>
    <body onload="access_story_to_edit();" onscroll="fix_top_row_edit();"> 
    	<div class="topPage">
        	<nav id="nav" class="navigation">
            	<div class="left-nav-side">
                	<h2 id="navbar-title">pepper storyteller</h2>
                </div>  
				<div class="right-nav-side">
  					<a href="profile.php">TORNA AL PROFILO</a>
                    <a id="nav-switch" href="#" onclick="enable_port_navbar();" style="border:none;"><i class="fas fa-bars nav-menu" ></i></a>
                </div>
        	</nav>
        	<nav id="nav-portrait" class="navigation-portrait">
        		<div class="left-nav-side-portrait">
        			<h2>pepper storyteller</h2>
        		</div>  
        		<div class="right-nav-side-portrait">
        			<a href="profile.php" style="white-space:normal; padding:10px;">TORNA AL PROFILO</a>
        		</div>
        	</nav>    
      		<div class="main-page">
          		<form id="formData" enctype="multipart/form-data" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post"> 
            		<input type="text" name="story_title" id="story_title" style="display: none;">
           			<div class="top-banner" style="align-items:center;">
              			<h2 style="color: #292d33; margin-top:150px; align-self:flex-start; font-size: 40px;">Modifica storia</h2>
                  		<div class="top-banner-left-side"style=" width : 100%;">
                      		<h2 id="title_text" name="title_text" style=" width : 100%; color: #292d33; margin-top: -20px; align-self:center; font-size: 62px;"></h2>
                  		</div>
           			</div>
                    <div id="help-panel" class="top-row" style="background-color: #292d33; position: absolute; top:0px;">
                		<div id="par-column" class="top-row-column">
                        	<h3 id="help-text1" class="help-panel-text">PARAGRAFO</h3>
                	    	<div id="btn-container1" class="button-container">
                  		   		<input id="paragraph-button1" type="button" title="Aggiungi paragrafo" onclick="createParagraph()" value="AGGIUNGI">
                  		    	<input id="paragraph-button2" type="button" title="Rimuovi paragrafo" onclick="deleteParagraph()" value="RIMUOVI">
                	    	</div>
                        </div>
                        <div id="mor-column" class="top-row-column">
                	    	<h3 id="help-text2" class="help-panel-text">MORALE</h3>
                	    	<div id="btn-container2" class="button-container">
                	    		<input id="moral-button1" type="button" onclick="toggle_moral(this)" value="AGGIUNGI">
                	    		<input id="moral-button2" type="button" onclick="toggle_moral(this)" value="RIMUOVI">
                	    	</div>
                        </div>
                        <div id="rec-column" class="top-row-column-rec">
                        	<input id="upload-story" type="submit" height="100px" value="INVIA MODIFICA">
                        </div>     
                	</div>
                	<div id="container" class="paragraph-card" style="margin-top: 5px;">
                    </div>  
                    <div id="moral-container" class="paragraph-card">           		
               		</div>
                </form>
            </div>
        </div>
    </body>
</html>                 