<?php
include "functions.php";
$action = $_POST["action"];

if($action == "func"){
  echo func();
}

?>
