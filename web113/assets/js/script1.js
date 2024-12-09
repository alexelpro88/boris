const savedEmail = localStorage.getItem("savedEmail");
const savedPassword = localStorage.getItem("savedPassword");
if (savedEmail && savedPassword) {
    document.getElementById("email").value = savedEmail;
    document.getElementById("password").value = savedPassword;
}
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === savedEmail && password === savedPassword) {
        alert("Inicio de sesión exitoso.");
        window.location.href = "index3.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }
});