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
    	<style>
        body{
        	width: 100%;
            height: auto;
            margin: 0 auto;
            font-family: Roboto;
        }
        .story-name{
        	width: fit-content;
            margin: 2em auto;
            font-size: 46px;
            font-weight: 700;
        }
                
        .sub-text {
        	width: fit-content;
            margin: 0 auto;
            margin-top:-3.5em;
        }
        .empty-page {
        	width: fit-content;
            margin: 5em auto;
            font-size: 32px;
            font-weight: 500;
            
        }
        .results-container{
        	width: 80%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin-top: 2em;
            margin-bottom: 5em;
            margin-inline: auto;
            gap:4em;
        }
        .container{
        	width:33vw;
            max-height:100%;
            margin:0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        .container textarea{
			width: 60%;
            min-height: 25vh;
            resize: vertical;
            max-height: 50vh;
            font-size: 16px;
        }
        .header {
        	width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #333;
            color: white;
            padding: 10px;
            border-radius: 10px 10px 0 0;
            box-sizing: border-box;
            
        }
        .header h2 {
            margin: 0;
            font-size: 16px;
        }
        .header button {
            background-color: #666;
            border: none;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
        }
        .content {
            width: 100%;
            height:fit-content;
            background-color: #e0e0e0;
            padding: 20px;
            border-radius: 0 0 10px 10px;
            box-sizing: border-box;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .results {
            background-color: white;
            padding: 10px;
            border-radius: 10px;
            max-height: 300px;
            overflow-y: auto;
            border: 1px solid #ccc;
        }
        .results p {
            margin: 5px 0;
        }
    </style>
    </head>
    <body onload="load_results()">
    <!--Background-->  
            <div>
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
                <h2 id="story_name" class="story-name"></h2>
                <h3 id='test_questions' class="sub-text"></h3>
                <div id="results_container" class="results-container">
                <h3 id="empty_page" class="empty-page">Attualmente non risultato disponibili esiti per il test scelto</h3>
                </div>
            </div>
            <a href="#nav">
          		<div id="top-button" class="back-to-top" style="display:none;">
              		<i class="fas fa-chevron-up"></i>
          		</div>
        	</a>
    </body>
</html>