<?php
include "functions.php";
$action = $_POST["action"];

if($action == "getPoints"){
  echo getPoints();
}

?>
