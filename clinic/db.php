<?php
header("Access-Control-Allow-Origin: *");
header('Content-type:  application/json; charset=utf-8');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Accept");
header('Content-Type: application/json');
$servername = "localhost";
$username = "root";
$password = "";
$database = "clinic";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully";
?>