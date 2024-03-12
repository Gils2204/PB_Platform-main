<?php
session_start();

if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit;
}

$username = $_SESSION['username'];
$kamar = $_SESSION['kamar'];
$harga = $_SESSION['harga'];

?>

<!DOCTYPE html>
<html>
<head>
    <title>Sewa Kos - Dashboard</title>
</head>
<body>
    <h1>Welcome, <?= $username?>!</h1>
    <p>Your room type is: <?= $kamar?></p>
    <p>Your room price is: <?= $harga?></p>
    <a href="logout.php">Logout</a>
</body>
</html>