<?php 
$serv_name = "localhost"; 
$serv_username = "root"; 
$serv_pass = "";
$db_name = "animeco";

// connect to database
$connect = mysqli_connect($serv_name, $serv_username, $serv_pass, $db_name);

if (!$connect) {
  die("Connection failed"); // connection error
}
