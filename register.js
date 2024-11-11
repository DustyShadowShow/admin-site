document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername && newPassword) {
        alert("Inscription réussie !");
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);
        window.location.href = "login.html";
    }
});
