
<?php 

include "db.php";

$id = $_POST["id"];

$sql = "DELETE FROM doctors WHERE id='$id'";
$response = "";
if ($conn->query($sql) === TRUE) {
  $response = "ok";
  echo json_encode($response);
} else {
    $response = "error";
  echo json_encode($response);
}
 


$conn->close();
?>
