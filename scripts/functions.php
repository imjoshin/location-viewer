<?php

function getPoints(){
  $json = json_decode(file_get_contents("../LocationHistory3.json"), true);
  $return = array();

  foreach($json["locations"] as $location){
    array_push($return, array("lat"=>$location["latitudeE7"] / 10000000, "lng"=>$location["longitudeE7"] / 10000000));
  }

  return json_encode($return);
}



?>
