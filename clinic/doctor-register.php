<?php 

include "db.php";

$name = $_POST["name"];
$surname = $_POST["surname"];
$email = $_POST["email"];
$password = $_POST["password"];

$sql = "INSERT INTO doctors (name, surname, email, password)
VALUES ('$name', '$surname', '$email', '$password')";



if ($conn->query($sql) === TRUE) {
    $response = array(
        "status"=>"ok"
    );
    echo json_encode($response);
} else {
    $response = array(
        "status"=>"error"
    );
 echo json_encode($response);
}


$conn->close();
?>