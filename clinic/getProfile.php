<?php 

include "db.php";

$id = $_POST["id"];

$sql = "SELECT * FROM patients WHERE id='$id'";
$result = $conn->query($sql);

    $data = [];
if ($result->num_rows > 0) {
 $row = $result->fetch_assoc();
 $response = array(
     "id"=> $row["id"],
     "email"=>$row["email"],
     "name"=>$row["name"],
     "surname"=>$row["surname"],
     "password"=>$row["password"],
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