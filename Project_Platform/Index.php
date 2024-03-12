<!DOCTYPE html>
<html>
<head>
    <title>Sewa Kos</title>
</head>
<body>
    <h1>Sewa Kos</h1>
    <form action="users.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
        <label for="kamar">Kamar:</label>
        <select id="kamar" name="kamar">
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Triple">Triple</option>
        </select><br><br>
        <label for="harga">Harga:</label>
        <input type="number" id="harga" name="harga"><br><br>
        <input type="submit" value="Create User">
    </form>
</body>
</html>