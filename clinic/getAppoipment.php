<?php 

include "db.php";

$doctorId = $_POST["doctorId"];
$patientId = $_POST["patientId"];
$date = $_POST["date"];
$time = $_POST["time"];
$text = $_POST["text"];

$sql = "INSERT INTO appointments (doctorId, patientId, day, time, description)
VALUES ('$doctorId', '$patientId', '$date', '$time', '$text')";



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