<?php 

include "db.php";

$sql = "SELECT * FROM doctors";
$result = $conn->query($sql);

$data = [];


if ($result->num_rows > 0) {
    $i = 0;
      while($row = $result->fetch_assoc()) {
          $jsonArrayObject = (
            array(
              'id' => $row["id"], 
              'name' => $row["name"], 
              'surname' => $row["surname"],
              'description' => $row["description"],
              'area' => $row["area"],
              'status' => "ok"));
          $data[$i] = $jsonArrayObject;
          $i++;  
     
  }
    echo json_encode($data);
          // print_r($data);

  } else {
    $response = array(
      "status" => "error",
      "errorInfo" => $conn->error
    ); 
  
    echo json_encode($response);
  }
$conn->close();
?>