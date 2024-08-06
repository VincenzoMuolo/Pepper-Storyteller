<?php

session_start();

require_once('connection.php');

$title = "";
$title_err = "";

if (!(isset($_SESSION["Username"]) && $_SESSION["Username"] != "")) {
	header('Refresh:1; url=https://pepper4storytelling.altervista.org/login.php');
}
else {
	// Processing form data when form is submitted
	if($_SERVER["REQUEST_METHOD"] == "POST") {
    	$moral = $_POST['moral'] ?? '';
    	$title = $_POST['title'] ?? '';
        
        $titleLenght = mb_strlen($title);
        
        $mySelectStatement = $conn->prepare("SELECT * FROM Storie WHERE Titolo = :title");
        $mySelectStatement->bindParam(':title', $title);
        $mySelectStatement->execute();
        $titleResult = $mySelectStatement->fetchAll(PDO::FETCH_ASSOC);
        if (count($titleResult) > 0) {
			$title_err = "Esiste già una storia con questo nome";
		}
        else if ($titleLenght < 3 || $titleLenght > 40) {
            if ($titleLenght < 3) $title_err = "La lunghezza minima del titolo è di 3 caratteri";
        	else if ($titleLenght > 40) $title_err = "La lunghezza massima del titolo è di 40 caratteri";
        }
        else {
        	$myCreateStatement = "CREATE TABLE `$title` (
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
								 TipoAudio VARCHAR(255) NULL                                 
								 )";

            if(!$conn->exec($myCreateStatement)) {
            	$counter = 0;
    			foreach ($_POST['paragraph'] as $textArea) {         
    				// Verifico eventuali problemi nell'upload del file
                    if (!isset($_FILES["images"]) || $_FILES["images"]["error"][$counter] != UPLOAD_ERR_OK) {
                    	error_log( "Errore nell'invio del file. Riprova!");
                    }

                    $maxsize = 5242880; //MAX 5MB
                    
                    if ($_FILES["images"]["size"][$counter] >= $maxsize) {
            				$_SESSION["message"] = "File troppo grande. La dimensione deve essere inferiore a 5MB.";
            		}
                        
        			// Recupero delle informazioni sul file immagine inviato
                    $nome_file_vero_immagine = $_FILES["images"]["name"][$counter];
					$nome_file_temporaneo_immagine = $_FILES["images"]["tmp_name"][$counter];					
					$tipo_file_immagine = $_FILES["images"]["type"][$counter];
                    
                    // Leggo il contenuto del file
					$dati_file_immagine = file_get_contents($nome_file_temporaneo_immagine);
                    
                    if (!isset($_FILES["video"]) || $_FILES["video"]["error"][$counter] != UPLOAD_ERR_OK) 
                    	error_log( "Errore nell'invio del file. Riprova!");                       
                    
                    if ($_FILES["video"]["size"][$counter] >= $maxsize) {
            				$_SESSION["message"] = "File troppo grande. La dimensione deve essere inferiore a 5MB.";
            		}
                    
                    // Recupero delle informazioni sul file video inviato
                    $nome_file_vero_video = $_FILES["video"]["name"][$counter];
					$nome_file_temporaneo_video = $_FILES["video"]["tmp_name"][$counter];					
					$tipo_file_video = $_FILES["video"]["type"][$counter];
                    
                    // Leggo il contenuto del file
					$dati_file_video = file_get_contents($nome_file_temporaneo_video);
                             
                    
                    if (!isset($_FILES["audio"]) || $_FILES["audio"]["error"][$counter] != UPLOAD_ERR_OK){
                    	error_log( "Errore nell'invio del file. Riprova!");                       
                    }
                    if ($_FILES["audio"]["size"][$counter] >= $maxsize) {
            				$_SESSION["message"] = "File troppo grande. La dimensione deve essere inferiore a 5MB.";
            		}
                    
                    // Recupero delle informazioni sul file video inviato
                    $nome_file_vero_audio = $_FILES["audio"]["name"][$counter];
					$nome_file_temporaneo_audio = $_FILES["audio"]["tmp_name"][$counter];					
					$tipo_file_audio = $_FILES["audio"]["type"][$counter];
                    
                    // Leggo il contenuto del file
					$dati_file_audio = file_get_contents($nome_file_temporaneo_audio);                                    
    				                    
                    //INVIO COLORE
                    $color = $_POST["colors"][$counter];
             
					$my_Insert_Statement = $conn->prepare("INSERT INTO `$title` (Testo, Immagine, NomeImmagine, TipoImmagine, Colore, Video, NomeVideo, TipoVideo, Audio, NomeAudio, TipoAudio) VALUES (:paragraph, :dati_file_immagine, :nome_file_vero_immagine, :tipo_file_immagine, :color, :dati_file_video, :nome_file_vero_video, :tipo_file_video, :dati_file_audio, :nome_file_vero_audio, :tipo_file_audio)");
                    $my_Insert_Statement->bindParam(':paragraph', $textArea);
                    $my_Insert_Statement->bindParam(':dati_file_immagine', $dati_file_immagine);
    				$my_Insert_Statement->bindParam(':nome_file_vero_immagine', $nome_file_vero_immagine);
    				$my_Insert_Statement->bindParam(':tipo_file_immagine', $tipo_file_immagine);
                    $my_Insert_Statement->bindParam(':color', $color);
                    $my_Insert_Statement->bindParam(':dati_file_video', $dati_file_video);
    				$my_Insert_Statement->bindParam(':nome_file_vero_video', $nome_file_vero_video);
    				$my_Insert_Statement->bindParam(':tipo_file_video', $tipo_file_video);
                    $my_Insert_Statement->bindParam(':dati_file_audio', $dati_file_audio);
    				$my_Insert_Statement->bindParam(':nome_file_vero_audio', $nome_file_vero_audio);
    				$my_Insert_Statement->bindParam(':tipo_file_audio', $tipo_file_audio);
    				if ($my_Insert_Statement->execute()) {
        				error_log("Paragrafo pubblicato correttamente.");
					}
                    else {
                        error_log("Errore nella pubblicazione del paragrafo");
					}
                    //Inizio modifiche per inserimento dati domande sul database
                    //NUOVA AGGIUNTA PER IL TERMINA STORIA
                    if(isset($_POST["idParDestF"][$counter]) && $_POST["idParDestF"][$counter] > 0){
                    	$endStory = $_POST["idParDestF"][$counter];
                        $question = "StoryEnding";
                      	$idPar = $counter+1;
                        $answer1 ="0";
                        $answer2 = "0";
                        $answer3 = "";
                        $answer4 = "";
                        $idParDest1 = $_POST["idParDestF"][$counter];
                        $idParDest2 = "0";
                        $idParDest3 = "";
                        $idParDest4 = "";
                        $answerType1 = null;
                        $answerType2 = null;
                        $answerType3 = null;
                        $answerType4 = null;
                        $my_Ending_Statement = $conn->prepare("INSERT INTO `Domande` (Storia, IdParagrafo, Domanda, Risposta1, Risposta2, Risposta3, Risposta4, idParDestinazione1, idParDestinazione2, idParDestinazione3, idParDestinazione4, esitoRisp1, esitoRisp2, esitoRisp3, esitoRisp4) VALUES (:title, :id_paragraph, :question, :answer1, :answer2, :answer3, :answer4, :idParDest1, :idParDest2, :idParDest3, :idParDest4, :answerType1, :answerType2, :answerType3, :answerType4)");
                        $my_Ending_Statement->bindParam(':title', $title);
                        $my_Ending_Statement->bindParam(':id_paragraph', $idPar);
                        $my_Ending_Statement->bindParam(':question', $question);
                        $my_Ending_Statement->bindParam(':answer1', $answer1);
                        $my_Ending_Statement->bindParam(':answer2', $answer2);
                        $my_Ending_Statement->bindParam(':idParDest1', $idParDest1);
                        $my_Ending_Statement->bindParam(':idParDest2', $idParDest2);
                        $my_Ending_Statement->bindValue(':answerType1', NULL);
                        $my_Ending_Statement->bindValue(':answerType2', NULL);
                        $my_Ending_Statement->bindValue(':answer3', NULL);
                        $my_Ending_Statement->bindValue(':idParDest3', NULL);
                        $my_Ending_Statement->bindValue(':answerType3', NULL);
                        $my_Ending_Statement->bindValue(':answer4', NULL);
                        $my_Ending_Statement->bindValue(':idParDest4', NULL);
                        $my_Ending_Statement->bindValue(':answerType4', NULL);
                        $my_Ending_Statement->execute();

                    }else{
                        if(isset($_POST["question"][$counter]) && strlen($_POST["question"][$counter]) > 0){
                          //CARICAMENTO DATI DOMANDE
                          $question = $_POST["question"][$counter];
                          $idPar = $counter+1;
                          $answer1 = $_POST["answer1"][$counter];
                          $answer2 = $_POST["answer2"][$counter];
                          $answer3 = $_POST["answer3"][$counter];
                          $answer4 = $_POST["answer4"][$counter];
                          $idParDest1 = $_POST["idParDest1"][$counter];
                          $idParDest2 = $_POST["idParDest2"][$counter];
                          $idParDest3 = $_POST["idParDest3"][$counter];
                          $idParDest4 = $_POST["idParDest4"][$counter];
                          $answerType1 = null;
                          $answerType2 = null;
                          $answerType3 = null;
                          $answerType4 = null;

                          // Aggiungi questi echo per visualizzare i valori
                          echo "Domanda: " . $_POST["question"][$counter] . "<br>";
                          echo "idPar: " . $idPar . "<br>";
                          echo "answer1: " . $answer1 . "<br>";
                          echo "answer2: " . $answer2 . "<br>";
                          echo "answer3: " . (isset($answer3) ? $answer3 : 'NULL') . "<br>";
                          echo "answer4: " . (isset($answer4) ? $answer4 : 'NULL') . "<br>";
                          echo "idParDest1: " . $idParDest1 . "<br>";
                          echo "idParDest2: " . $idParDest2 . "<br>";
                          echo "idParDest3: " . (isset($idParDest3) ? $idParDest3 : 'NULL') . "<br>";
                          echo "idParDest4: " . (isset($idParDest4) ? $idParDest4 : 'NULL') . "<br>";
                          echo "answerType1: " . $answerType1 . "<br>";
                          echo "answerType2: " . $answerType2 . "<br>";
                          echo "answerType3: " . (isset($answerType3) ? $answerType3 : 'NULL') . "<br>";
                          echo "answerType4: " . (isset($answerType4) ? $answerType4 : 'NULL') . "<br>";
                          echo "idParDestF: " . (isset($idParDestF) ? $idParDestF : 'NULL') . "<br>";            

                          $my_Question_Statement = $conn->prepare("INSERT INTO `Domande` (Storia, IdParagrafo, Domanda, Risposta1, Risposta2, Risposta3, Risposta4, idParDestinazione1, idParDestinazione2, idParDestinazione3, idParDestinazione4, esitoRisp1, esitoRisp2, esitoRisp3, esitoRisp4) VALUES (:title, :id_paragraph, :question, :answer1, :answer2, :answer3, :answer4, :idParDest1, :idParDest2, :idParDest3, :idParDest4, :answerType1, :answerType2, :answerType3, :answerType4)");
                          $my_Question_Statement->bindParam(':title', $title);
                          $my_Question_Statement->bindParam(':id_paragraph', $idPar);
                          $my_Question_Statement->bindParam(':question', $question);
                          $my_Question_Statement->bindParam(':answer1', $answer1);
                          $my_Question_Statement->bindParam(':answer2', $answer2);
                          $my_Question_Statement->bindParam(':idParDest1', $idParDest1);
                          $my_Question_Statement->bindParam(':idParDest2', $idParDest2);
                          $my_Question_Statement->bindParam(':answerType1', $answerType1);
                          $my_Question_Statement->bindParam(':answerType2', $answerType2);

                          if(!empty($answer3)) {
                            $my_Question_Statement->bindParam(':answer3', $answer3);
                            $my_Question_Statement->bindParam(':idParDest3', $idParDest3);
                            $my_Question_Statement->bindParam(':answerType3', $answerType3);
                          } else {
                            $my_Question_Statement->bindValue(':answer3', NULL);
                            $my_Question_Statement->bindValue(':idParDest3', NULL);
                            $my_Question_Statement->bindValue(':answerType3', NULL);
                          }
                          if(!empty($answer4)) {
                            $my_Question_Statement->bindParam(':answer4', $answer4);
                            $my_Question_Statement->bindParam(':idParDest4', $idParDest4);
                            $my_Question_Statement->bindParam(':answerType4', $answerType4);
                          } else {
                            $my_Question_Statement->bindValue(':answer4', NULL);
                            $my_Question_Statement->bindValue(':idParDest4', NULL);
                            $my_Question_Statement->bindValue(':answerType4', NULL);
                          }
                          $my_Question_Statement->execute();
                        }
                    }
                    	//FINE MODIFICA
        				$counter++;
					}
                
                $my_Insert_Statement = $conn->prepare("INSERT INTO `Storie Temp` (Titolo, Username) VALUES (:title, :username)");
            	$my_Insert_Statement->bindParam(':title', $title);
                $my_Insert_Statement->bindParam(':username', $_SESSION["Username"]);
            	if ($my_Insert_Statement->execute()) {
                	$my_Insert_Statement = $conn->prepare("INSERT INTO `Morali` (Storia, Morale) VALUES (:title, :moral)");
            		$my_Insert_Statement->bindParam(':title', $title);
                	$my_Insert_Statement->bindParam(':moral', $moral);
                    $my_Insert_Statement->execute();
                    
                    $username = $_SESSION["Username"];
                    $logFile = fopen("debug.log", "a");
					fwrite($logFile, "Value of myVariable: " . "Username: ".$username. " Titolo storia: " .$title. " Morale storia" .$moral . "\n");
					fclose($logFile);
                    $mySelectStatement = $conn->prepare("SELECT Email FROM Utenti WHERE Username = :username");
        			$mySelectStatement->bindParam(':username', $username);
    				$mySelectStatement->execute();
   					$result = $mySelectStatement->fetch(PDO::FETCH_ASSOC);
            		$email = $result['Email'];
                    
                    $type= "storia";
                    $my_storyType_Statement = $conn->prepare("INSERT INTO `TipoPubblicazione` (Storia, Tipo) VALUES (:title, :type)");
            		$my_storyType_Statement->bindParam(':title', $title);
                	$my_storyType_Statement->bindParam(':type', $type);
                    $my_storyType_Statement->execute();
                    
                    //NON FUNZIONA SU GMAIL DAL CELL:
                    $str = "Ciao $username!\nGrazie per il tuo contributo, un amministratore eseguirà un controllo sul materiale inviato per accertarsi che la storia sia coerente e soprattutto priva di contenuti inappropriati. Riceverai una comunicazione quando la storia sarà controllata.\nIl team Pepper4Storytelling.\n";
                    //$strconv = htmlentities($str);
                    $msg = utf8_decode($str);
                    //mail($email, "Attesa pubblicazione", "Ciao $username!\nGrazie per il tuo contributo, un amministratore eseguirà un controllo sul materiale inviato per accertarsi che la storia sia coerente e soprattutto priva di contenuti inappropriati. Riceverai una comunicazione quando la storia sarà controllata.\nIl team Pepper4Storytelling.\n");
                 	mail($email, "Attesa pubblicazione", $msg);
                    header("location: new-story-confirm.html");
					//echo "<script type='text/javascript'>alert(\"La tua storia è stata inviata correttamente. Riceverai una comunicazione via email quando sarà pubblicata\")</script>";
                }
                else {
                    //DROP TABLE TABELLA NOMESTORIA CHE SI E' CREATA UGUALMENTE            
					echo "<script type='text/javascript'>alert(\"Si è verificato un errore nella pubblicazione della storia\")</script>";    
                }
            }
            else {
                echo "<script type='text/javascript'>alert(\"Si è verificato un errore nella creazione della tabella\")</script>"; 
            }
        }
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
        <link rel="stylesheet" href="top-fab.css">
        <script src="script.js"></script>
        <script src="animation.js"></script>
        <script src="create-paragraph.js"></script>
        <script src="story_input_check.js"></script>  
        <script src="alert.js"></script>
        <script>
        	sessionStorage.clear();
        </script>
        <title>Pepper storyteller</title>
    </head>
    <body onload="createParagraph();" onscroll="fix_top_row();">
    <div class="parallax-new-story"></div>
        <div class="topPage">
            <nav id="nav" class="navigation" style="background-color:transparent;">
                <div class="left-nav-side">
                    <h2 id="navbar-title"><a href="homepage-logged.php" style="text-decoration: none; color: white;">pepper storyteller</a></h2>
                </div>  
                <div class="right-nav-side">
                    <a href="homepage-logged.php">HOMEPAGE</a>
                    <a href="new-story.php" class="nav-active">NUOVA STORIA</a>
                    <a href="new-story-question.php">NUOVO TEST</a>
                    <a href="profile.php">PROFILO</a>
                    <a href="#" id="logoutBTN" onclick="logout()">LOGOUT</a>
                    <a id="nav-switch" href="#" onclick="enable_port_navbar();" style="border:none;"><i class="fas fa-bars nav-menu" ></i></a>
                </div>
            </nav>
            <nav id="nav-portrait" class="navigation-portrait">
                <div class="left-nav-side-portrait">
                    <h2>pepper storyteller</h2>
                </div>  
                <div class="right-nav-side-portrait">
                    <a href="homepage-logged.php" >HOMEPAGE</a>
                    <a href="new-story.php" class="nav-active">NUOVA STORIA</a>
                    <a href="new-story-question.php">NUOVO TEST</a>
                    <a href="profile.php">PROFILO</a>
                    <a href="#" id="logoutBTN" onclick="logout()">LOGOUT</a>
                </div>
            </nav>
            <div class="main-page">
                <form id="formData" enctype="multipart/form-data" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">  
                    <div id="top-area" class="top-banner">
                    	<h2>Scrivi la tua storia</h2>
                        <div class="absolute-text"><h2>Scrivi storie interattive!</h2><h3>Per scriverne una clicca <img src="images/qa.svg"> per inserire i dati della domanda</h3></div>
                        <div id="left-side-banner" class="top-banner-left-side">
                            <input id="title-text" type="text" name="title" placeholder="Titolo..." onfocusout="check_title()" class="form-control <?php echo (!empty($title_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $title; ?>" required>
                            <i class="fas fa-book"></i>
                            <span id="title-error" class="invalid-feedback" style="visibility:hidden">err</span>
                        </div>
                    </div>
                    <div id="help-panel" class="top-row">
                		<div id="par-column" class="top-row-column">
                        	<h2 id="help-text1" class="help-panel-text">PARAGRAFO</h3>
                	    	<div id="btn-container1" class="button-container">
                  		   		<input id="paragraph-button1" type="button" title="Aggiungi paragrafo" onclick="createParagraph()" value="AGGIUNGI">
                  		    	<input id="paragraph-button2" type="button" title="Rimuovi paragrafo" onclick="deleteParagraph()" value="RIMUOVI">
                	    	</div>
                        </div>
                        <div id="mor-column" class="top-row-column">
                	    	<h2 id="help-text2" class="help-panel-text">MORALE</h3>
                	    	<div id="btn-container2" class="button-container">
                	    		<input id="moral-button1" type="button" onclick="toggle_moral(this)" value="AGGIUNGI">
                	    		<input id="moral-button2" type="button" onclick="toggle_moral(this)" value="RIMUOVI">
                	    	</div>
                        </div>
                        <div id="rec-column" class="top-row-column-rec">
                        	<input id="upload-story" type="button" value="INVIA STORIA">
                        </div>     
                	</div>
                    <div id="container" class="paragraph-card">      
					</div>    
                    <div id="moral-container" class="paragraph-card">           		
               		</div>
                </form>
            </div>
        </div>
    </body>
</html>
