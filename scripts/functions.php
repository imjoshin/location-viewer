<?php
ini_set('memory_limit','-1');

function getPoints(){
  $lines = file_get_contents("../locations.txt");
  $return = array();
  $curloc = array();

  foreach(explode("\n", $lines) as $line) {
    if(isset($curloc["lat"]) && isset($curloc["lng"])){
      array_push($return, $curloc);
      $curloc = array();
    }
    else if(!isset($curloc["lat"])) {
      if(intval($line) < 0) continue;
      $curloc["lat"] = intval($line) / 10000000;
    }

    else $curloc["lng"] = intval($line) / 10000000;
  }

  return json_encode($return);
}



?>
