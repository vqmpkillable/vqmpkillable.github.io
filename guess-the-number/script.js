<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess the Number Game</title>
    <link rel="icon" href="https://pbs.twimg.com/profile_images/1707431450264457218/MUtcNhCs_400x400.jpg" type="image/x-icon">
    <style>
        /* Your CSS styles here... */
    </style>
</head>
<body>
    <!-- Display "Logged in as" information -->
    <div class="user-info">
        <div class="usericon"></div>
        <div class="username" id="username">Username</div>
    </div>

    <div class="container">
        <h1>Guess the Number Game</h1>
        <p>Guess a number between 1 and 100:</p>
        <input type="number" id="userGuess" min="1" max="100">
        <button onclick="checkGuess()">Submit</button>
        <p id="message"></p>
    </div>

    <script src="script.js"></script>
</body>
</html>
