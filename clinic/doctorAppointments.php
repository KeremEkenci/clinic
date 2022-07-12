<?php 

include "db.php";
$doctorId = $_POST["doctorId"];

$sql = "SELECT *,patients.name as patientName FROM appointments
left join patients on patients.id =  appointments.patientId
 where  appointments.doctorId='$doctorId'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $i = 0;
      while($row = $result->fetch_assoc()) {
          $jsonArrayObject = (
            array(
              'id' => $row["id"], 
              'day' => $row["day"], 
              'time' => $row["time"],
              'description' => $row["description"],
              'patientName' => $row["patientName"],
              'status' => "ok"));
          $data[$i] = $jsonArrayObject;
          $i++;  
     
  }
    echo json_encode($data);
  } else {
    $response = array(
      "status" => "error",
      "errorInfo" => $conn->error
    ); 
  
    echo json_encode($response);
  }
$conn->close();
?>