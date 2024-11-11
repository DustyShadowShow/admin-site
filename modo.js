// Exemple de JavaScript pour la page modo.js
document.addEventListener('DOMContentLoaded', function() {
    const approveButton = document.querySelector('#approve-comment');
    approveButton.addEventListener('click', function() {
        alert("Commentaire approuvé !");
        // Implémenter la logique d'approbation des commentaires ici
    });

    const deleteButton = document.querySelector('#delete-content');
    deleteButton.addEventListener('click', function() {
        alert("Contenu supprimé !");
        // Implémenter la logique de suppression de contenu ici
    });
});
