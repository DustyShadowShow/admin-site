document.getElementById('uploadButton').addEventListener('click', function() {
    const file = document.getElementById('fileUpload').files[0];
    if (file) {
        alert("Fichier envoyé avec succès !");
    } else {
        alert("Veuillez sélectionner un fichier !");
    }
});

document.getElementById('executeCommandButton').addEventListener('click', function() {
    const command = document.getElementById('commandInput').value;
    const output = document.getElementById('commandOutput');
    
    if (command.toLowerCase() === "restart") {
        output.textContent = "Commande 'restart' exécutée : Redémarrage du système.";
    } else {
        output.textContent = "Commande inconnue.";
    }
});
