<?php 

include "db.php";


$id = $_POST["id"];
$name = $_POST["name"];
$surname = $_POST["surname"];
$email = $_POST["email"];
$password = $_POST["password"];

$sql = "UPDATE patients SET name='$name',surname = '$surname',email ='$email',password = '$password' WHERE id='$id'";


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