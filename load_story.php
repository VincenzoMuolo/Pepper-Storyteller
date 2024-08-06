<?php
	unset($_SESSION['counter']);
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
        <link rel ="stylesheet" href="alert-confirm.css"/>
        <link rel ="stylesheet" href="top-fab.css"/>
        <script src="script.js"></script>
        <script src="alert.js"></script>
        <script src="animation.js"></script>
    </head>
    <body onload="open_paragraph()">
    <!--Background-->  
            <div class="all">
			<!--navigationBar-->   
                <nav id="nav" class="navigation" style="background-color:#292d33;">
                    <div class="left-nav-side" style="color: #F3F1E9;">
                        <h2 id="navbar-title">pepper storyteller</h2>
                    </div>  
                    <div class="right-nav-side">
  						<a id="go-to" href="profile.php" >TORNA AL PROFILO</a>
                        <a id="nav-switch" href="#" onclick="enable_port_navbar();" style="border:none;"><i class="fas fa-bars nav-menu" ></i></a>
                    </div>
                </nav>
                <nav id="nav-portrait" class="navigation-portrait">
                    <div class="left-nav-side-portrait">
                        <h2 style="white-space:normal; padding:10px;">pepper storyteller</h2>
                    </div>  
                    <div class="right-nav-side-portrait">
                    	<a id="go-to-port" href="profile.php" style="white-space:normal; padding:10px;" >TORNA AL PROFILO</a>
                    </div>
                </nav>
                <!--navigationBar-->
                <div id="paragraph-container" class="p-container" onload="show_button()">
                	<h1 id="story_name"></h1>
                    <div id="modify-option" class="right-area" style="display:none;">
                    	<i id="test-button" class="fas fa-poll-h" onclick="load_test_result(this)" style="display:none;"><p>Esiti Test</p></i>
                    	<i id="edit-button" class="fas fa-edit" onclick="edit_story(this)"><p>Modifica</p></i>
                        <i id="delete-button" class="fas fa-trash" onclick="remove_story(this)"><p>Elimina</p></i>
                    </div>
                </div>
                <div class="loader-area-large">
                	<div id="loading-ring" class="lds-ring"><div></div><div></div><div></div><div></div></div>
    			</div>
                <div id="show-morale" style="display:none;">
                	<div class='moral-main'>
                    	<label class="moral-style">Morale</label>
                        <div class="moral-text">
                        	<label id="moral-paragraph" class="par-m-style"></label>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#nav">
          		<div id="top-button" class="back-to-top" style="display:none;">
              		<i class="fas fa-chevron-up"></i>
          		</div>
        	</a>
    </body>
</html>
