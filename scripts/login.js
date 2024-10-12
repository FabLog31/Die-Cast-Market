// Objeto que simula una base de datos de usuarios
const usersDB = {
    "usuario1": "contraseña1",
    "usuario2": "contraseña2"
};

// Función para manejar el inicio de sesión
function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Validar si el usuario existe y la contraseña es correcta
    if (usersDB[usernameInput] && usersDB[usernameInput] === passwordInput) {
        message.style.color = "green";
        message.textContent = "¡Inicio de sesión exitoso!";
        // Redirigir o realizar otra acción aquí
    } else {
        message.style.color = "red";
        message.textContent = "Usuario o contraseña incorrectos.";
    }
}
