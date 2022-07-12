<?php 

include "db.php";

$email = $_POST["email"];
$password = $_POST["password"];

$sql = "SELECT * FROM doctors WHERE email='$email' and password = '$password'";
$result = $conn->query($sql);

    $data = [];
if ($result->num_rows > 0) {
 $row = $result->fetch_assoc();
 $response = array(
     "id"=> $row["id"],
     "email"=>$row["email"],
     "name"=>$row["name"],
     "surname"=>$row["surname"],
     "area"=>$row["area"],
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