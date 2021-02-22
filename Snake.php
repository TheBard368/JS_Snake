<?php

function OpenCon()
 {
 
  $conn = new mysqli("localhost", "root", "", "mygames") or die("Connect failed: %s\n". $conn -> error);
  
  return $conn;
 }

 function CloseCon($conn)
 {
  $conn -> close();
 }

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // collect value of input field
  $conn = OpenCon();

  $name1 = $_POST["fname"];
  $name2 = $_POST["points"];

  if (empty($name1) && empty($name2)) {
    echo "Name is empty";
  } else {
     

      $result = "INSERT INTO snakerank (points, name) VALUES (" + name1 + ", " + name2 + ")";

      if ($conn->query($result) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $result . "<br>" . $conn->error;
      }

   
  }
  CloseCon($conn);

}
