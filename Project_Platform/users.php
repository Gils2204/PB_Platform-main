<?php
require_once 'config.php';

// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $kamar = $_POST['kamar'];
    $harga = $_POST['harga'];

    // Hash the password
    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    // Insert the user data into the database
    $query = "INSERT INTO users (username, password, kamar, harga) VALUES (?,?,?,?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sssi", $username, $password_hash, $kamar, $harga);
    $stmt->execute();

    // Check if the insertion was successful
    if ($stmt->affected_rows > 0) {
        echo "User created successfully!";
    } else {
        echo "Error creating user: ". $stmt->error;
    }
}

// Close the database connection
$conn->close();
?>