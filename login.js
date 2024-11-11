document.addEventListener('DOMContentLoaded', function() {
    const users = {
        "Dusty": { "password": "admin123", "role": "admin" },
        "Banana": { "password": "modo123", "role": "modo" },
        "m&m": { "password": "modo456", "role": "modo" }
    };

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');

        // Vérification des identifiants
        if (users[username] && users[username].password === password) {
            // Si les identifiants sont corrects
            localStorage.setItem('username', username);
            localStorage.setItem('role', users[username].role);
            window.location.href = (users[username].role === "admin") ? "admin.html" : "modo.html";
        } else {
            // Si les identifiants sont incorrects
            errorMessage.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
            errorMessage.style.display = "block";
        }
    });
});
