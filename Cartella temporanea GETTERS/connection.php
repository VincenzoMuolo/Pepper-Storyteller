<?php

// Create a new connection to the MySQL database using PDO, $conn is an object
try { 
  $conn = new PDO("mysql:host=localhost;dbname=my_pepper4storytelling", "root", "");
  
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $error) {
  echo 'Connection error: ' . $error->getMessage();
}

?>