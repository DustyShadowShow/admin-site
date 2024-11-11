// Exemple d'animation ou de logique pour le menu dans l'en-tête
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav ul li a');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = '#ff9800';  // Change la couleur au survol
        });
        
        item.addEventListener('mouseout', () => {
            item.style.color = '';  // Rétablit la couleur par défaut
        });
    });
});
