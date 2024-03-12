<?php
require_once 'config.php';

// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Query the database to retrieve the user data
    $query = "SELECT * FROM users WHERE username =?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if the user exists
    if ($result->num_rows > 0) {
        $user_data = $result->fetch_assoc();

        // Verify the password
        if (password_verify($password, $user_data['password'])) {
            // Login successful, start a session
            session_start();
            $_SESSION['username'] = $username;
            $_SESSION['kamar'] = $user_data['kamar'];
            $_SESSION['harga'] = $user_data['harga'];

            // Redirect to the dashboard
            header('Location: dashboard.php');
            exit;
        } else {
            echo "Invalid password";
        }
    } else {
        echo "User not found";
    }
}

// Close the database connection
$conn->close();
?>