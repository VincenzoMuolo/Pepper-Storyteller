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
                    			$myUpdateStatement = $conn->prepare("UPDATE `$title` SET Testo = :paragraph, Immagine = :image, nome = :imgName, tipo = :imgType, Colore = :color WHERE id = :id");
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
                			$myUpdateStatement = $conn->prepare("UPDATE `$title` SET Testo = :paragraph, Immagine = :image, nome = :imgName, tipo = :imgType, Colore = :color WHERE id = :id");
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
                    	$myInsertStatement = $conn->prepare("INSERT INTO `$title` (Testo, Immagine, nome, tipo, Colore) VALUES (:paragraph, :image, :imgName, :imgType, :color)");
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
                    		$myUpdateStatement = $conn->prepare("UPDATE `$title` SET Testo = :paragraph, Immagine = :image, nome = :imgName, tipo = :imgType, Colore = :color WHERE id = :id");
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
                		$myUpdateStatement = $conn->prepare("UPDATE `$title` SET Testo = :paragraph, Immagine = :image, nome = :imgName, tipo = :imgType, Colore = :color WHERE id = :id");
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
                	$myInsertStatement = $conn->prepare("INSERT INTO `$title` (Testo, Immagine, nome, tipo, Colore) VALUES (:paragraph, :image, :imgName, :imgType, :color)");
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
            
            //DROP TABLE DA STORIE TEMP + INVIO EMAIL MODIFICA APPROVATA
          	$myDeleteStatement = $conn->prepare("DELETE FROM `Storie Temp` WHERE Titolo = :title");
          	$myDeleteStatement->bindParam(':title', $titleTemp);
          	if($myDeleteStatement->execute()) {
              	$my_Delete_Statement = $conn->prepare("DROP TABLE `$titleTemp`");
              	if($my_Delete_Statement->execute()) {
                  	$str = "Ciao $username!\nLa modifica della tua storia '$title' è stata approvata. La nuova versione ha sostituito quella precedente ed è già disponibile.\nIl team Pepper4Storytelling.\n";
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
                  	$str = "Ciao $username!\nLa modifica della tua storia '$titleTemp' è stata rifiutata per il seguente motivo: " . "$deleteReason.\nIl team Pepper4Storytelling.\n";
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
                	$str = "Ciao $username!\nLa tua storia '$title' è stata pubblicata, puoi trovarla nella sezione 'Profilo'.\nIl team Pepper4Storytelling.\n";
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
                    
                  	$deleteReason = $_POST['message'] ?? '';
                  	$str = "Ciao $username!\nLa tua storia '$title' è stata rifiutata per il seguente motivo: " . "$deleteReason.\nIl team Pepper4Storytelling.\n";
                  	$msg = utf8_decode($str);
                  	mail($email, "Storia rifiutata", $msg);
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

