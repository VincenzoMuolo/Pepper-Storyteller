<?php

require_once('connection.php');

$password = $confirm_password = "";
$password_err = $confirm_password_err = "";

// Processing form data when form is submitted
if(isset($_GET['token'])) {
    $token = $_GET['token'];
    $password = $_POST['password'] ?? '';
    $confirmPassword = $_POST['password-repeat'] ?? '';
    
    $passwordLenght = mb_strlen($password);
        
    if ($passwordLenght < 6 || $passwordLenght > 20) {
    	if ($passwordLenght < 6) $password_err = "La lunghezza minima della password è di 6 caratteri";
        else if ($passwordLenght > 20) $password_err = "La lunghezza massima della password è di 20 caratteri";
    } else if ($password != $confirmPassword) {
    	$confirm_password_err = "Le password inserite non corrispondono";
    } else {
        $password_hash = password_hash($password, PASSWORD_BCRYPT);
        
        $mySelectStatement = $conn->prepare("UPDATE Utenti SET Password = :password WHERE Token = :token");
        $mySelectStatement->bindParam(':password', $password_hash);
        $mySelectStatement->bindParam(':token', $token);
        if ($mySelectStatement->execute()) {
            $mySelectStatement = $conn->prepare("SELECT Username, Email FROM Utenti WHERE Token = :token");
   			$mySelectStatement->bindParam(':token', $token);
    		$mySelectStatement->execute();
    		$queryResult = $mySelectStatement->fetch(PDO::FETCH_OBJ);
            mail($queryResult->Email, "Password Cambiata", "Ciao $queryResult->Username! La tua password è stata cambiata correttamente.");
            header('Refresh:0.5; url=https://pepper4storytelling.altervista.org/fasdf/login.php');               
			echo "<script type='text/javascript'>alert(\"Password cambiata correttamente\")</script>";
        } else {
        	header('Refresh:0.5; url=https://pepper4storytelling.altervista.org/fasdf/reset_password.php');               
			echo "<script type='text/javascript'>alert(\"Impossibile cambiare la password\")</script>";
        }
    }
} 
    $conn = null;
?>

<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
    <link rel="stylesheet" href="reset_password.css">
    <link rel="stylesheet" href="anim_background.css">
    <link rel="stylesheet" href="navbar_style.css">
    <script src="animation.js"></script>
    </head>
<body>
	<!--Background-->  
	<div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
	<!--Background-->
    
	<!--navigationBar-->   
    <nav id="nav" class="navigation">
    	<ul>
        	<li><h1 class="title">pepper storyteller</h1></li>
            <li class="navButton" onclick="animOutLogin()"><a href="#">TORNA ALLA HOMEPAGE</a></li>
        </ul> 
    </nav>
	<!--navigationBar-->
      <form id="lnCard" class="loginCard animIn" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <ul class="topCard">
                <li><label class="loginTitle">Reimposta Password</label></li>
                <li onClick="animOutLogin()"><i class="fas fa-times closebtn" ></i></li>
            </ul>
            <ul class="inputForm">
            	<li class="cardText"><label>Per favore compila i seguenti campi per reimpostare la password.</label></li>
                <li><label>Nuova Password</label></li>
                <li><input type="password" name="password" class="form-control <?php echo (!empty($password_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $password; ?>" required></li>
    			<li><span class="invalid-feedback"><?php echo $password_err; ?></span></li>
                <li><label>Conferma Password</label></li>
                <li>
                <input type="password" name="password-repeat" class="form-control <?php echo (!empty($password_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $confirm_password; ?>" required>
    			<span class="invalid-feedback"><?php echo $confirm_password_err; ?></span>
                </li>
                <li><button type="submit" class="buttonSubmit">Reimposta password</button></li>
            </ul>
        </form>
    </body>
</html>