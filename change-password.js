// Exemple de JavaScript pour la page change-password.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        const newPassword = document.querySelector('#new-password').value;
        const confirmPassword = document.querySelector('#confirm-password').value;

        if (newPassword !== confirmPassword) {
            event.preventDefault();
            alert("Les mots de passe ne correspondent pas !");
        }
    });
});
