<?php
// Dane do połączenia z bazą danych
$host = 'sql208.infinityfree.com'; // Adres hosta (zazwyczaj localhost)
$username = 'if0_36023197'; // Nazwa użytkownika
$password = 'pDunoQgRMhWo5VD'; // Hasło (domyślnie puste dla XAMPP i MAMP)
$database = 'if0_36023197_heroesofequestria'; // Nazwa bazy danych

// Tworzenie połączenia z bazą danych
$conn = new mysqli($host, $username, $password, $database);

// Sprawdzenie czy połączenie zostało nawiązane
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully"; // Wyświetla komunikat jeśli połączenie zostało nawiązane
?>
