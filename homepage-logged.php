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
        <link rel="stylesheet" href="alert-confirm.css"/>
        <link rel ="stylesheet" href="homepage-logged.css"/>
        <script src="script.js"></script>
        <script src="animation.js"></script>
        <script src="alert.js"></script>
        <title>Pepper storyteller</title>
    </head>
    <body onload="load_all_stories();">       
        <!--navigationBar-->   
        <div class="topPage">
            <!--navigationBar-->   
                <nav id="nav" class="navigation">
                    <div class="left-nav-side">
                        <h2 id="navbar-title">pepper storyteller</h2>
                    </div>  
                    <div class="right-nav-side">
                        <a id="nav-item1" href="homepage-logged.php" class="nav-active">HOMEPAGE</a>
                        <a id="nav-item2" href="new-story.php" >NUOVA STORIA</a>
                        <a id="nav-item3" href="profile.php">PROFILO</a>
                        <a id="nav-item4" href="#" id="logoutBTN" onclick="logout()">LOGOUT</a>
                        <a id="index-option" href="index.php" style="display:none;">TORNA ALLA HOMEPAGE</a>
                        <a id="nav-switch" href="#" onclick="enable_port_navbar();" style="border:none;"><i class="fas fa-bars nav-menu" ></i></a>
                    </div>
                </nav>
                <nav id="nav-portrait" class="navigation-portrait">
                    <div class="left-nav-side-portrait">
                        <h2>pepper storyteller</h2>
                    </div>  
                    <div class="right-nav-side-portrait">
                        <a id="nav-item1" href="homepage-logged.php" class="nav-active">HOMEPAGE</a>
                        <a id="nav-item2" href="new-story.php" >NUOVA STORIA</a>
                        <a id="nav-item3" href="profile.php">PROFILO</a>
                        <a id="nav-item4" href="#" id="logoutBTN" onclick="logout()">LOGOUT</a>
                        <a id="index-option" href="index.php" style="display:none;">TORNA ALLA HOMEPAGE</a>
                    </div>
                </nav>
                <!--navigationBar-->
                <h1 class="head-title">Raccolta storie</h1>
                <div class="search-area">
                    <input id="search-story" type="text" name="search" onfocusout="load_story_name(this)" placeholder="Cerca una storia...">
                	<i id="id_search" class="fa fa-search" onclick="search_story(this)"></i>
                    <i id="id_search_delete" class="fa fa-times" onclick="clean_search()"></i>
                </div>
                <div id="err_container" class="err-container"></div>
                <div id="container" class="story-container">
                
                </div>
        </div>
    </body>
</html>