<?php
ini_set('memory_limit','-1');

function getPoints(){
  $lines = file_get_contents("../locations2.txt");
  $return = array();
  $curloc = array();

  foreach(explode("\n", $lines) as $line) {
    file_put_contents("test.txt", "found $line | \n", FILE_APPEND);
    if(isset($curloc["lat"]) && isset($curloc["lng"])){
      file_put_contents("test.txt", "pushed " . $curloc["lat"] . ", " . $curloc["lng"] . " | \n", FILE_APPEND);
      array_push($return, $curloc);
      $curloc = array();
    }
    else if(!isset($curloc["lat"])) $curloc["lat"] = intval($line) / 10000000;
    else $curloc["lng"] = intval($line) / 10000000;
  }

  return json_encode($return);
}



?>
