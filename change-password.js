document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si l'utilisateur est connecté
    const loggedInUser = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    
    if (!loggedInUser) {
        window.location.href = "login.html";  // Rediriger vers la page de connexion si non authentifié
    }

    // Afficher un message de bienvenue personnalisé
    alert('Bienvenue, ' + loggedInUser + '! Vous pouvez maintenant changer votre mot de passe.');

    // Écouter la soumission du formulaire de changement de mot de passe
    document.getElementById('changePasswordForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Récupérer les valeurs des champs
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorMessage = document.getElementById('error-message');

        // Vérifier si le mot de passe actuel est correct
        const users = {
            "Dusty": { "role": "grads max", "password": "admin123" },  // Admin avec mot de passe
            "Banana": { "role": "modo", "password": "modo123" },        // Modérateur avec mot de passe
            "m&m": { "role": "modo", "password": "modo456" }            // Modérateur avec mot de passe
        };

        if (users[loggedInUser].password !== currentPassword) {
            // Si le mot de passe actuel est incorrect
            errorMessage.textContent = "Ancien mot de passe incorrect.";
            errorMessage.style.display = "block";
            return;
        }

        // Vérifier si les nouveaux mots de passe sont identiques
        if (newPassword !== confirmPassword) {
            errorMessage.textContent = "Les nouveaux mots de passe ne correspondent pas.";
            errorMessage.style.display = "block";
            return;
        }

        // Vérifier la validité du nouveau mot de passe (par exemple, longueur minimale)
        if (newPassword.length < 6) {
            errorMessage.textContent = "Le nouveau mot de passe doit contenir au moins 6 caractères.";
            errorMessage.style.display = "block";
            return;
        }

        // Mettre à jour le mot de passe de l'utilisateur dans le stockage local
        users[loggedInUser].password = newPassword;

        // Mettre à jour dans le localStorage
        localStorage.setItem('username', loggedInUser);
        localStorage.setItem('role', users[loggedInUser].role);

        // Afficher un message de succès et rediriger
        alert("Votre mot de passe a été mis à jour avec succès !");
        window.location.href = (users[loggedInUser].role === "grads max") ? "admin.html" : "modo.html";
    });
});
