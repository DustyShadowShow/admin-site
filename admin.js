// Exemple simple pour la page admin.js
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('#add-user-button');
    addButton.addEventListener('click', function() {
        alert("Ajout d'un utilisateur !");
        // Implémenter la logique d'ajout d'utilisateur ici
    });

    const permissionButton = document.querySelector('#modify-permission-button');
    permissionButton.addEventListener('click', function() {
        alert("Modification des permissions !");
        // Implémenter la logique de modification des permissions ici
    });
});
