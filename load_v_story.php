<?php

session_start();
require_once('connection.php');
unset($_SESSION['counter']);
if($_SERVER["REQUEST_METHOD"] == "POST") {
	$titleTemp = $_POST['story_title'] ?? '';
    $moral = $_POST['moral'] ?? '';
    $title = substr($titleTemp, 0, strpos($titleTemp,' (Modifica)'));
    if(strpos($titleTemp, ' (Modifica)') !== false) {  //QUANDO IL TITOLO CONTIENE (Modifica)
    	$mySelectStatement = $conn->prepare("SELECT Username FROM `Storie Temp` WHERE Titolo = :title");
      	$mySelectStatement->bindParam(':title', $titleTemp);
      	$mySelectStatement->execute();
      	$result = $mySelectStatement->fetch(PDO::FETCH_ASSOC);
      	$username = $result['Username'];
                        
      	$mySelectStatement = $conn->prepare("SELECT Email FROM Utenti WHERE Username = :username");
      	$mySelectStatement->bindParam(':username', $username);
     	$mySelectStatement->execute();
      	$result = $mySelectStatement->fetch(PDO::FETCH_ASSOC);
      	$email = $result['Email'];
            
        if (isset($_POST['confirm_button'])) {
        	//CONFERMA MODIFICA
            $mySelectStatement = $conn->prepare("SELECT * FROM `$title`");
            $mySelectStatement->execute();
      		$resultOldTable = $mySelectStatement->fetchAll(PDO::FETCH_ASSOC);
                        
            $mySelectStatement = $conn->prepare("SELECT * FROM `$titleTemp`");
            $mySelectStatement->execute();
      		$resultNewTable = $mySelectStatement->fetchAll(PDO::FETCH_ASSOC);
            
            $counter = 0;           
            if (count($resultNewTable) >= count($resultOldTable)) {
            	//SIGNIFICA CHE ABBIAMO AGGIUNTO UNO O PIU' PARAGRAFI, OPPURE I PARAGRAFI SONO UGUALI
                foreach ($resultNewTable as $element) {
                	if ($counter < count($resultOldTable)) {
                    	//AGGIORNA PARAGRAFI GIA' PRESENTI
                		if (empty($element['Immagine'])) {
                    		if ($element['Elimina Immagine'] == "true") {
                            	//IN QUESTO CASO L'IMMAGINE E' STATA CANCELLATA
                    			$myUpdateStatement = $conn->prepare("UPDATE `$title` SET Testo = :paragraph, Immagine = :image, NomeImmagine = :imgName, TipoImmagine = :imgType, Colore = :color WHERE id = :id");
                    			$myUpdateStatement->bindParam(':paragraph', $element["Testo"]);
                        		$myUpdateStatement->bindParam(':image', $element["Immagine"]);
                   				$myUpdateStatement->bindParam(':imgName', $element["nome"]);
                    			$myUpdateStatement->bindParam(':imgType', $element["tipo"]);
                    			$myUpdateStatement->bindParam(':color', $element["Colore"]);
                    			$myUpdateStatement->bindParam(':id', $element["id"]);
      							$myUpdateStatement->execute();
                    		} else {
                            	//IN QUESTO CASO L'IMMAGINE NON E' STATA MODIFICATA
                    			$myUpdateStatement = $conn->prepare("UPDATE `$title` SET Testo = :paragraph, Colore = :color WHERE id = :id");
                    			$myUpdateStatement->bindParam(':paragraph', $element["Testo"]);
                   				$myUpdateStatement->bindParam(':color', $element["Colore"]);
                    			$myUpdateStatement->bindParam(':id', $element["id"]);
      							$myUpdateStatement->execute();
                    		}
                    
                		} else {
                			//IN QUESTO CASO L'IMMAGINE E' STATA CAMBIATA
                			$myUpdateStatement = $conn->prepare("UPDATE `$title` SET Testo = :paragraph, Immagine = :image, NomeImmagine = :imgName, TipoImmagine = :imgType, Colore = :color WHERE id = :id");
                    		$myUpdateStatement->bindParam(':paragraph', $element["Testo"]);
                    		$myUpdateStatement->bindParam(':image', $element["Immagine"]);
                    		$myUpdateStatement->bindParam(':imgName', $element["nome"]);
                    		$myUpdateStatement->bindParam(':imgType', $element["tipo"]);
                    		$myUpdateStatement->bindParam(':color', $element["Colore"]);
                    		$myUpdateStatement->bindParam(':id', $element["id"]);
      						$myUpdateStatement->execute();       	                   	
                		}
                    } else {
                    	//INSERISCI PARAGRAFI AGGIUNTI
                    	$myInsertStatement = $conn->prepare("INSERT INTO `$title` (Testo, Immagine, NomeImmagine, TipoImmagine, Colore) VALUES (:paragraph, :image, :imgName, :imgType, :color)");
          				$myInsertStatement->bindParam(':paragraph', $element["Testo"]);
                    	$myInsertStatement->bindParam(':image', $element["Immagine"]);
                    	$myInsertStatement->bindParam(':imgName', $element["nome"]);
                    	$myInsertStatement->bindParam(':imgType', $element["tipo"]);
                    	$myInsertStatement->bindParam(':color', $element["Colore"]);
          				$myInsertStatement->execute();
                    }
                    $counter++;
            	} //fine for each               
                              
            } else {
            	//SIGNIFICA CHE ABBIAMO RIMOSSO UNO O PIU' PARAGRAFI
                foreach ($resultNewTable as $element) {
                	//AGGIORNA PARAGRAFI GIA' PRESENTI
                	if (empty($element['Immagine'])) {
                    	if ($element['Elimina Immagine'] == "true") {
                            //IN QUESTO CASO L'IMMAGINE E' STATA CANCELLATA
                    		$myUpdateStatement = $conn->prepare("UPDATE `$title` SET Testo = :paragraph, Immagine = :image, NomeImmagine = :imgName, TipoImmagine = :imgType, Colore = :color WHERE id = :id");
                    		$myUpdateStatement->bindParam(':paragraph', $element["Testo"]);
                        	$myUpdateStatement->bindParam(':image', $element["Immagine"]);
                   			$myUpdateStatement->bindParam(':imgName', $element["nome"]);
                    		$myUpdateStatement->bindParam(':imgType', $element["tipo"]);
                    		$myUpdateStatement->bindParam(':color', $element["Colore"]);
                    		$myUpdateStatement->bindParam(':id', $element["id"]);
      						$myUpdateStatement->execute();
                    	} else {
                            //IN QUESTO CASO L'IMMAGINE NON E' STATA MODIFICATA
                    		$myUpdateStatement = $conn->prepare("UPDATE `$title` SET Testo = :paragraph, Colore = :color WHERE id = :id");
                    		$myUpdateStatement->bindParam(':paragraph', $element["Testo"]);
                   			$myUpdateStatement->bindParam(':color', $element["Colore"]);
                    		$myUpdateStatement->bindParam(':id', $element["id"]);
      						$myUpdateStatement->execute();
                    	}
                    
                	} else {
                		//IN QUESTO CASO L'IMMAGINE E' STATA CAMBIATA
                		$myUpdateStatement = $conn->prepare("UPDATE `$title` SET Testo = :paragraph, Immagine = :image, NomeImmagine = :imgName, TipoImmagine = :imgType, Colore = :color WHERE id = :id");
                    	$myUpdateStatement->bindParam(':paragraph', $element["Testo"]);
                    	$myUpdateStatement->bindParam(':image', $element["Immagine"]);
                    	$myUpdateStatement->bindParam(':imgName', $element["nome"]);
                    	$myUpdateStatement->bindParam(':imgType', $element["tipo"]);
                    	$myUpdateStatement->bindParam(':color', $element["Colore"]);
                    	$myUpdateStatement->bindParam(':id', $element["id"]);
      					$myUpdateStatement->execute();       	                   	
                	}
                	$counter++;
                }//fine for each
                
                $counter = $counter + 1;
                while ($counter <= count($resultOldTable)) {
                	$myDeleteStatement = $conn->prepare("DELETE FROM `$title` WHERE id = :id");
                    $myDeleteStatement->bindParam(':id', $counter);
                    $myDeleteStatement->execute();
					$counter++;                    
                } 
                
                $mySelectStatement = $conn->prepare("SELECT * FROM `$title`");
           		$mySelectStatement->execute();
      			$resultModifiedTable = $mySelectStatement->fetchAll(PDO::FETCH_ASSOC);
                
                //USO TRUNCATE PER RESETTARE L'ID AUTOINCREMENTALE A CAUSA DELLA RIMOZIONE
                $myTruncateStatement = $conn->prepare("TRUNCATE TABLE `$title`");
                $myTruncateStatement->execute();
                //RIPOPOLO LA TABELLA APPENA MODIFICATA
                foreach ($resultModifiedTable as $element) {
                	$myInsertStatement = $conn->prepare("INSERT INTO `$title` (Testo, Immagine, NomeImmagine, TipoImmagine, Colore) VALUES (:paragraph, :image, :imgName, :imgType, :color)");
          			$myInsertStatement->bindParam(':paragraph', $element["Testo"]);
                    $myInsertStatement->bindParam(':image', $element["Immagine"]);
                    $myInsertStatement->bindParam(':imgName', $element["nome"]);
                    $myInsertStatement->bindParam(':imgType', $element["tipo"]);
                    $myInsertStatement->bindParam(':color', $element["Colore"]);
          			$myInsertStatement->execute();
                }
            }//fine rimozione                       

			//*****************************MORALE*********************************** 
           	//LA MODIFICA PREVEDE UNA NUOVA MORALE
            $myUpdateStatement = $conn->prepare("UPDATE Morali SET Morale = :moral WHERE Storia = :story");
            $myUpdateStatement->bindParam(':story', $title);
            $myUpdateStatement->bindParam(':moral', $moral);
            $myUpdateStatement->execute();
            //RIMUOVO LA MORALE MODIFICATA
            $myDeleteStatement = $conn->prepare("DELETE FROM Morali WHERE Storia = :story");
          	$myDeleteStatement->bindParam(':story', $titleTemp);
            $myDeleteStatement->execute();

            //*****************************MORALE*********************************** 
            /***********************************************
            * AGGIONRAMENTO MODIFICHE PER LE DOMANDE IN UNA STORIA *
            ***********************************************/
            /*VERIFICO IN PRIMIS SE ESISTE IL RECORD CON MODIFICA DELLA STORIA ATTUALE*/   
            if(strpos($titleTemp, ' (Modifica)') !== false) {  //QUANDO IL TITOLO CONTIENE (Modifica)
            	$myModifiedQuestionStatement = $conn->prepare("SELECT * FROM Domande WHERE Storia = :story");
          		$myModifiedQuestionStatement->bindParam(':story', $titleTemp);
            	$myModifiedQuestionStatement->execute();
                $results = $myModifiedQuestionStatement->fetchALL(PDO::FETCH_ASSOC);
                if($results){
                	/*(Modifica) ha valori quindi dobbiamo recoperarli ed aggiornare la storia*/
                    foreach ($results as $result) {
                        $id= $result["IdParagrafo"];
                        $question= $result["Domanda"];
                        $answer1= $result["Risposta1"];
                        $answer2= $result["Risposta2"];
                        $answer3= $result["Risposta3"];
                        $answer4= $result["Risposta4"];
                        $idParDest1= $result["idParDestinazione1"];
                        $idParDest2= $result["idParDestinazione2"];
                        $idParDest3= $result["idParDestinazione3"];
                        $idParDest4= $result["idParDestinazione4"];
                        $answerType1 = $result["esitoRisp1"];
                        $answerType2 = $result["esitoRisp2"];
                        $answerType3 = $result["esitoRisp3"];
                        $answerType4 = $result["esitoRisp4"];
                        /*Verifico se il record temporaneo attuale ha una corrispondenza con un record già salvato*/
                        $myCheckQuestionStatement = $conn->prepare("SELECT * FROM Domande WHERE Storia = :story AND IdParagrafo = :id");
                        $myCheckQuestionStatement->bindParam(':story', $title);
                        $myCheckQuestionStatement->bindParam(':id', $id);
                        $myCheckQuestionStatement->execute();
                        $result = $myCheckQuestionStatement->fetch(PDO::FETCH_ASSOC);
                        if($result){
                        	/*C'E CORRISPONDENZA QUINDI DEVO AGGIORNARE IL VALORE*/
                            $myUpdateQuestionStatement = $conn->prepare("UPDATE Domande SET 
                                                            Storia = :story,
                                                            IdParagrafo = :id,
                                                            Domanda = :question, 
                                                            Risposta1 = :answer1, 
                                                            Risposta2 = :answer2, 
                                                            Risposta3 = :answer3, 
                                                            Risposta4 = :answer4, 
                                                            idParDestinazione1 = :idParDest1, 
                                                            idParDestinazione2 = :idParDest2, 
                                                            idParDestinazione3 = :idParDest3, 
                                                            idParDestinazione4 = :idParDest4,
                                                            esitoRisp1 = :answerType1,
                                                            esitoRisp2 = :answerType2,
                                                            esitoRisp3 = :answerType3,
                                                            esitoRisp4 = :answerType4
                                                            WHERE Storia = :story AND IdParagrafo = :id");
                            $myUpdateQuestionStatement->bindParam(':story', $title);
                            $myUpdateQuestionStatement->bindParam(':id', $id);
                            $myUpdateQuestionStatement->bindParam(':question', $question);
                            $myUpdateQuestionStatement->bindParam(':answer1', $answer1);
                            $myUpdateQuestionStatement->bindParam(':answer2', $answer2);
                            $myUpdateQuestionStatement->bindParam(':idParDest1', $idParDest1);
                            $myUpdateQuestionStatement->bindParam(':idParDest2', $idParDest2);
                            $myUpdateQuestionStatement->bindParam(':answerType1', $answerType1);
                      		  $myUpdateQuestionStatement->bindParam(':answerType2', $answerType2);
                            if(!empty($answer3)) {
                              $myUpdateQuestionStatement->bindParam(':answer3', $answer3);
                              $myUpdateQuestionStatement->bindParam(':idParDest3', $idParDest3);
                              $myUpdateQuestionStatement->bindParam(':answerType3', $answerType3);
                            } else {
                              $myUpdateQuestionStatement->bindValue(':answer3', NULL);
                              $myUpdateQuestionStatement->bindValue(':idParDest3', NULL);
                              $myUpdateQuestionStatement->bindValue(':answerType3', NULL);
                            }
                            if(!empty($answer4)) {
                              $myUpdateQuestionStatement->bindParam(':answer4', $answer4);
                              $myUpdateQuestionStatement->bindParam(':idParDest4', $idParDest4);
                              $myUpdateQuestionStatement->bindParam(':answerType4', $answerType4);
                            } else {
                              $myUpdateQuestionStatement->bindValue(':answer4', NULL);
                              $myUpdateQuestionStatement->bindValue(':idParDest4', NULL);
                              $myUpdateQuestionStatement->bindValue(':answerType4', NULL);
                            }
                            $myUpdateQuestionStatement->execute();
                        }else{
                        	/*NON C'E CORRISPONDENZA QUINDI DEVO INSERIRE IL VALORE*/
                            $myInsertQuestionStatement = $conn->prepare("INSERT INTO Domande 
                                                  (Storia, IdParagrafo, Domanda, Risposta1, Risposta2, Risposta3, Risposta4, idParDestinazione1, idParDestinazione2, idParDestinazione3, idParDestinazione4, esitoRisp1, esitoRisp2, esitoRisp3, esitoRisp4) 
                                                  VALUES (:story, :id, :question, :answer1, :answer2, :answer3, :answer4, :idParDest1, :idParDest2, :idParDest3, :idParDest4, :answerType1, :answerType2, :answerType3, :answerType4)");
                            $myInsertQuestionStatement->bindParam(':story', $title);
                            $myInsertQuestionStatement->bindParam(':id', $id);
                            $myInsertQuestionStatement->bindParam(':question', $question);
                            $myInsertQuestionStatement->bindParam(':answer1', $answer1);
                            $myInsertQuestionStatement->bindParam(':answer2', $answer2);
                            $myInsertQuestionStatement->bindParam(':idParDest1', $idParDest1);
                            $myInsertQuestionStatement->bindParam(':idParDest2', $idParDest2);
                            $myInsertQuestionStatement->bindParam(':answerType1', $answerType1);
                      		$myInsertQuestionStatement->bindParam(':answerType2', $answerType2);
                            if(!empty($answer3)) {
                              $myInsertQuestionStatement->bindParam(':answer3', $answer3);
                              $myInsertQuestionStatement->bindParam(':idParDest3', $idParDest3);
                              $myInsertQuestionStatement->bindParam(':answerType3', $answerType3);
                            } else {
                              $myInsertQuestionStatement->bindValue(':answer3', NULL);
                              $myInsertQuestionStatement->bindValue(':idParDest3', NULL);
                              $myInsertQuestionStatement->bindValue(':answerType3', NULL);
                            }
                            if(!empty($answer4)) {
                              $myInsertQuestionStatement->bindParam(':answer4', $answer4);
                              $myInsertQuestionStatement->bindParam(':idParDest4', $idParDest4);
                              $myInsertQuestionStatement->bindParam(':answerType4', $answerType4);
                            } else {
                              $myInsertQuestionStatement->bindValue(':answer4', NULL);
                              $myInsertQuestionStatement->bindValue(':idParDest4', NULL);
                              $myInsertQuestionStatement->bindValue(':answerType4', NULL);
                            }
                            $myInsertQuestionStatement->execute();    
                        }
                        /*ULTIMA VERIFICA -> SE UN RECORD NON ESISTE IN MODIFICA MA ESISTE NELL'ORIGINALE SIGNIFICA CHE DEVE ESSERE RIMOSSO */
                        $myModifiedQuestionStatement = $conn->prepare("SELECT * FROM Domande WHERE Storia = :story");
                        $myModifiedQuestionStatement->bindParam(':story', $title);
                        $myModifiedQuestionStatement->execute();
                        $main_results = $myModifiedQuestionStatement->fetchALL(PDO::FETCH_ASSOC);
                        foreach ($main_results as $main_result) {
                            $main_id= $main_result["IdParagrafo"];/* ID DEL PARAGRAFO ORIGINALE */
                            $myCheckQuestionStatement = $conn->prepare("SELECT * FROM Domande WHERE Storia = :story AND IdParagrafo = :id");/* VERIFICO SE ESISTE UN RECORD TEMPORANEO PER L'ID DATO */
                            $myCheckQuestionStatement->bindParam(':story', $titleTemp);
                            $myCheckQuestionStatement->bindParam(':id', $main_id);
                            $myCheckQuestionStatement->execute();
                            $record = $myCheckQuestionStatement->fetch(PDO::FETCH_ASSOC);
                            if($record){
                                /*IL RECORD ESISTE QUINDI VERRA' AGGIORNATO*/
                            }else{
                                /*UN RECORD NOTO NEI VALORI ORIGINALI DELLA DOMANDA NON ESISTE NELLA MODIFICA, QUINDI DOBBIAMO ELIMINARLO */
                                $myDeleteQuestionStatement = $conn->prepare("DELETE FROM Domande WHERE Storia = :story AND IdParagrafo = :id");
                                $myDeleteQuestionStatement->bindParam(':story', $title);
                                $myDeleteQuestionStatement->bindParam(':id', $main_id);
                                $myDeleteQuestionStatement->execute(); 
                            }
                        }
                	}

                    /*Terminate le operazioni posso eliminare i record temporanei*/
                    $myDeleteQuestionStatement = $conn->prepare("DELETE FROM Domande WHERE Storia = :story");
                    $myDeleteQuestionStatement->bindParam(':story', $titleTemp);
                    $myDeleteQuestionStatement->execute(); 
                }else{
                	/*La modifica non ha valori per le domande, il che significa che sono state rimosse tutte le domande*/
                    $myDeleteQuestionStatement = $conn->prepare("DELETE FROM Domande WHERE Storia = :story");
                    $myDeleteQuestionStatement->bindParam(':story', $title);
                    $myDeleteQuestionStatement->execute(); 
                }
            }
            /*FINE MODIFICHE*/
            //DROP TABLE DA STORIE TEMP + INVIO EMAIL MODIFICA APPROVATA
          	$myDeleteStatement = $conn->prepare("DELETE FROM `Storie Temp` WHERE Titolo = :title");
          	$myDeleteStatement->bindParam(':title', $titleTemp);
          	if($myDeleteStatement->execute()) {
              	$my_Delete_Statement = $conn->prepare("DROP TABLE `$titleTemp`");
              	if($my_Delete_Statement->execute()) {
                  	$str = "Ciao $username!\nLa modifica di '$title' è stata approvata. La nuova versione ha sostituito quella precedente ed è già disponibile.\nIl team Pepper4Storytelling.\n";
                  	$msg = utf8_decode($str);
                  	mail($email, "Modifica accettata", $msg);
                  	header("location: profile.php"); 
              	} else {
                  echo "<script type='text/javascript'>alert(\"Si è verificato un errore nella modifica della storia\")</script>";
              	}
          	} else {
              	echo "<script type='text/javascript'>alert(\"Si è verificato un errore nella modifica della storia\")</script>";
          	}
            //FINE CONFIRM
            header("location: redirect_confirm.html");  
            
        } else if (isset($_POST['delete_button'])) {
          	//RIFIUTA MODIFICA
          	$myDeleteStatement = $conn->prepare("DELETE FROM `Storie Temp` WHERE Titolo = :title");
          	$myDeleteStatement->bindParam(':title', $titleTemp);
          	if($myDeleteStatement->execute()) {
              	$my_Delete_Statement = $conn->prepare("DROP TABLE `$titleTemp`");
              	if($my_Delete_Statement->execute()) {
                	$deleteReason = $_POST['message'] ?? '';
                  	$str = "Ciao $username!\nLa modifica del tuo contenuto '$titleTemp' è stato rifiutato per il seguente motivo: " . "$deleteReason.\nIl team Pepper4Storytelling.\n";
                  	$msg = utf8_decode($str);
                  	mail($email, "Modifica rifiutata", $msg);
                  	header("location: profile.php"); 
              	} else {
                	echo "<script type='text/javascript'>alert(\"Si è verificato un errore nella rimozione della storia\")</script>";
              	}
          	} else {
            	echo "<script type='text/javascript'>alert(\"Si è verificato un errore nella rimozione della storia\")</script>";
          	}
        }
        
        
    } else { //QUANDO IL TITOLO NON CONTIENE (Modifica)
    	$title = $_POST['story_title'] ?? '';
        
     	$mySelectStatement = $conn->prepare("SELECT Username FROM `Storie Temp` WHERE Titolo = :title");
      	$mySelectStatement->bindParam(':title', $title);
      	$mySelectStatement->execute();
      	$result = $mySelectStatement->fetch(PDO::FETCH_ASSOC);
      	$username = $result['Username'];

      	$mySelectStatement = $conn->prepare("SELECT Email FROM Utenti WHERE Username = :username");
      	$mySelectStatement->bindParam(':username', $username);
      	$mySelectStatement->execute();
      	$result = $mySelectStatement->fetch(PDO::FETCH_ASSOC);
      	$email = $result['Email'];

      	if (isset($_POST['confirm_button'])) {
          	//CONFIRM ACTION    
        	$myInsertStatement = $conn->prepare("INSERT INTO Storie (Titolo, Username) VALUES (:title, :username)");
          	$myInsertStatement->bindParam(':title', $title);
          	$myInsertStatement->bindParam(':username', $username);
          	if ($myInsertStatement->execute()) {
            	$myDeleteStatement = $conn->prepare("DELETE FROM `Storie Temp` WHERE Titolo = :title");
              	$myDeleteStatement->bindParam(':title', $title);
              	if($myDeleteStatement->execute()) {          	
              		//RIMOSSA DA STORIE TEMP        	
                	$str = "Ciao $username!\nIl tuo contenuto '$title' è stato pubblicato, puoi trovarlo nella sezione 'Profilo'.\nIl team Pepper4Storytelling.\n";
                  	$msg = utf8_decode($str);
                  	mail($email, "Storia pubblicata", $msg);
                  	header("location: redirect_confirm.html");  
              	} else {
                  	echo "<script type='text/javascript'>alert(\"Si è verificato un errore nello spostamento della storia\")</script>";
              	}
          	} else {
              	echo "<script type='text/javascript'>alert(\"Si è verificato un errore nella conferma della pubblicazione\")</script>";               
          	}
      	} else if (isset($_POST['delete_button'])) {
          	//DELETE ACTION
          	$myDeleteStatement = $conn->prepare("DELETE FROM `Storie Temp` WHERE Titolo = :title");
          	$myDeleteStatement->bindParam(':title', $title);
          	if($myDeleteStatement->execute()) {
              	$my_Delete_Statement = $conn->prepare("DROP TABLE `$title`");
              	if($my_Delete_Statement->execute()) {
                	$myDeleteStatement = $conn->prepare("DELETE FROM `Morali` WHERE Storia = :title");
          			$myDeleteStatement->bindParam(':title', $title);
                    $myDeleteStatement->execute();
                    
                    /*Elimina record da Domande*/
                    $myDeleteStatement = $conn->prepare("DELETE FROM `Domande` WHERE Storia = :title");
          			$myDeleteStatement->bindParam(':title', $title);
                    $myDeleteStatement->execute();
                    
                    /*Elimina record da TipoPubblicazione*/
                    $my_storyType_Statement = $conn->prepare("DELETE FROM TipoPubblicazione WHERE Storia = :story");
                    $my_storyType_Statement->bindParam(':story', $title);
                    $my_storyType_Statement->execute();
                    
                  	$deleteReason = $_POST['message'] ?? '';
                  	$str = "Ciao $username!\nIl tuo contenuto '$title' è stato rifiutato per il seguente motivo: " . "$deleteReason.\nIl team Pepper4Storytelling.\n";
                  	$msg = utf8_decode($str);
                  	mail($email, "Contenuto rifiutato", $msg);
                  	header("location: profile.php"); 
              	} else {
                  echo "<script type='text/javascript'>alert(\"Si è verificato un errore nella rimozione della storia\")</script>";
              	}
          	} else {
              	echo "<script type='text/javascript'>alert(\"Si è verificato un errore nella rimozione della storia\")</script>";
          	}
		}
	}
}
$conn = null;

?>

<!DOCTYPE html>
<html lang="it">
    <head>
    	<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> 
        <link rel="stylesheet" href="navbar.css">
        <link rel="stylesheet" href="background.css"/>
        <link rel ="stylesheet" href="load_story.css"/>
        <link rel ="stylesheet" href="top-fab.css"/>
        <script src="script.js"></script>
        <script src="animation.js"></script>
    </head>
    <body onload="open_paragraph('admin')">
    <!--Background-->  
        
        <img id="full-screen-image" class="full-screen" onclick='open_fullScreen();'>
        	<!--navigationBar-->
            <div class="all">
			<!--navigationBar-->   
                <nav id="nav" class="navigation" style="background-color:#292d33; border: 0 solid #292d33; border-bottom-width:3px;">
                    <div class="left-nav-side" style="color: #F3F1E9;">
                        <h2 id="navbar-title">pepper storyteller</h2>
                    </div>  
                    <div class="right-nav-side">
  						<a id="go-to" href="profile.php" style=" font-weight:500;">TORNA AL PROFILO</a>
                        <a id="nav-switch" href="#" onclick="enable_port_navbar();" style="border:none;"><i class="fas fa-bars nav-menu" ></i></a>
                    </div>
                </nav>
                <nav id="nav-portrait" class="navigation-portrait" style="z-index:500;">
                    <div class="left-nav-side-portrait">
                        <h2 style="white-space:normal; padding:10px;">pepper storyteller</h2>
                    </div>  
                    <div class="right-nav-side-portrait">
						<a id="go-to-port" href="profile.php"  style="white-space:normal; padding:10px;">TORNA AL PROFILO</a>
                    </div>
                </nav>
                <!--navigationBar-->
                <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                    <div id="paragraph-container" class="p-container">
                        <h1 id="story_name"></h1>
                        <input type="text" name="story_title" id="story_title" style="display: none;">
                    </div>

                    <div class="loader-area-large">
                        <div id="loading-ring" class="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>  
                    <div id="show-morale" style="display:none;">
                		<div class='moral-main'>
                    		<label class="moral-style">Morale</label>
                        	<div class="moral-text">
                        		<label id="moral-paragraph" class="par-m-style"></label>
                                <input  type="text" id="send-moral" name="moral" style="display:none;">
                        	</div>
                    	</div>
                	</div>
                    <a href="#nav">
          				<div id="top-button" class="back-to-top" style="display:none;">
              			<i class="fas fa-chevron-up"></i>
          				</div>
        			</a>
                    <div class="button-area">
                    	<div id="delete-message" class="del-message" style="display:none;">
                        	<i class="fas fa-times" onclick="show_popUp();"></i>
                        	<h2 class="message-title">CANCELLA</h2>
                            <p class="message-text">Motivo della rimozione</p>
                            <textarea name="message" class="message-input" placeholder="Messaggio qui..."></textarea>
                            <input type="submit" name="delete_button" value="CONFERMA">
                        </div>
                        <input type="submit" name="confirm_button" value="CONFERMA">
                        <input type="button" value="CANCELLA" onclick="show_popUp();">
                    </div>
                </form>
    		</div>
    </body>
</html>
