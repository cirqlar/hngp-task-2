<?php


// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);

$time = date('m-d-Y-h-i-s-a', time());
$timestring = './' . $time;

$fs = fopen($timestring, 'w');
$variab = fwrite($fs, json_encode($data, JSON_PRETTY_PRINT));
fclose($fs);

$response = new stdClass();
$response->saved = !$variab;

header('Content-Type: application/json');

echo json_encode($response);



?>