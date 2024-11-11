document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('username');
    const users = {
        "Dusty": { "password": "admin123", "role": "admin" },
        "Banana": { "password": "modo123", "role": "modo" },
        "m&m": { "password": "modo456", "role": "modo" }
    };

    if (!loggedInUser) {
        window.location.href = "login.html";  // Redirige si non authentifié
    }

    document.getElementById('changePasswordForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorMessage = document.getElementById('error-message');

        if (users[loggedInUser].password !== currentPassword) {
            errorMessage.textContent = "Ancien mot de passe incorrect.";
            errorMessage.style.display = "block";
            return;
        }

        if (newPassword !== confirmPassword) {
            errorMessage.textContent = "Les nouveaux mots de passe ne correspondent pas.";
            errorMessage.style.display = "block";
            return;
        }

        if (newPassword.length < 6) {
            errorMessage.textContent = "Le mot de passe doit être d'au moins 6 caractères.";
            errorMessage.style.display = "block";
            return;
        }

        users[loggedInUser].password = newPassword;
        localStorage.setItem('username', loggedInUser);
        localStorage.setItem('role', users[loggedInUser].role);

        alert("Mot de passe mis à jour !");
        window.location.href = (users[loggedInUser].role === "admin") ? "admin.html" : "modo.html";
    });
});
