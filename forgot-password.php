<?php

require_once('connection.php');

$email = $username = "";
$email_err = "";

// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';
    
    $mySelectStatement = $conn->prepare("SELECT * FROM Utenti WHERE Email = :email");
    $mySelectStatement->bindParam(':email', $email);
    $mySelectStatement->execute();
    $emailResult = $mySelectStatement->fetchAll(PDO::FETCH_ASSOC);
        
    if (count($emailResult) < 1) {
    	$email_err = "Email non presente nel database. Inserisci l'email associata al tuo account.";         
    } else {
    	$mySelectStatement = $conn->prepare("SELECT Token FROM Utenti WHERE Email = :email");
    	$mySelectStatement->bindParam(':email', $email);
    	$mySelectStatement->execute();
    	$tokenResult = $mySelectStatement->fetch(PDO::FETCH_OBJ);
        
        $mySelectStatement = $conn->prepare("SELECT Username FROM Utenti WHERE Email = :email");
    	$mySelectStatement->bindParam(':email', $email);
    	$mySelectStatement->execute();
    	$usernameResult = $mySelectStatement->fetch(PDO::FETCH_OBJ);
        
        mail($email, "Reimposta Password", "Ciao $usernameResult->Username! Per reimpostare la tua password clicca sul seguente link e segui le istruzioni https://pepper4storytelling.altervista.org/reset_password.php?token=$tokenResult->Token ");
  		header('Refresh:0.5; url=https://pepper4storytelling.altervista.org/fasdf/index.php');               
		echo "<script type='text/javascript'>alert(\"Email inviata correttamente\")</script>";
    }
}
    $conn = null;
?>


<!DOCTYPE html>
<html>
	<head>
    	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="navbar.css">
        <link rel="stylesheet" href="alert-success.css"/>
        <link rel="stylesheet" href="background.css"/>
        <link rel="stylesheet" href="forgot-password.css">
        <script src="animation.js"></script>
        <script src="script.js"></script>
  	</head>
	<body>
    	<!--Background-->  
        <div class="parallax-short"></div>
        <div class="all">
			<!--navigationBar-->   
            <nav id="nav" class="navigation" style="background-color:transparent;">
            	<div class="left-nav-side">
                	<h2 id="navbar-title">pepper storyteller</h2>
                </div>  
                <div class="right-nav-side">
  					<a href="#" onclick="animOutLogin()">TORNA ALLA HOMEPAGE</a>
                    <a id="nav-switch" href="#" onclick="enable_port_navbar();" style="border:none;"><i class="fas fa-bars nav-menu" ></i></a>
                </div>
            </nav>
            <nav id="nav-portrait" class="navigation-portrait" style="z-index:500;">
            	<div class="left-nav-side-portrait">
                	<h2 style="white-space:normal; padding:10px;">pepper storyteller</h2>
                </div>  
                <div class="right-nav-side-portrait">
					<a href="#" onclick="animOutLogin()" style="white-space:normal; padding:10px;">TORNA ALLA HOMEPAGE</a>
                </div>
            </nav>
            <!--navigationBar-->
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        	<div id="loginCard" class="mainCard animIn">
            	<div class="topContainer">
                	<i style="visibility:hidden;" class="fas fa-times closebtn"></i>
                	<label class="cardTitle">Reimposta Password</label>
                	<i style="visibility:hidden;" onclick="animOutForgotPwd()" class="fas fa-times closebtn"></i>
              	</div>
            	<div class="container">
                <label class="containerText">Inserisci l'email associata al tuo account e segui le istruzioni per reimpostare la password.</label>
              		<div class="form-group">
                  		<i class="fas fa-paper-plane"></i>
                  		<input type="text" name="email" placeholder="Email" class="form-control <?php echo (!empty($email_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $email; ?>" required>
                  		<span class="invalid-feedback"><?php echo $email_err; ?><i class="fas fa-exclamation-circle" style="color:whitesmoke"></i></span>
              		</div>  
              		<button type="submit" class="button">Reimposta password</button>
          		</div>
            </div>
		</form>
        </div>
	</body>
</html>