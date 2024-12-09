document.getElementById("generateCredentials").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;

  if (!nombre || !apellido || !fechaNacimiento) {
      alert("Por favor, completa todos los campos.");
      return;
  }

  const formattedDate = fechaNacimiento.replace(/-/g, ""); 
  const newEmail = `${nombre.toLowerCase()}.${apellido.toLowerCase()}${formattedDate}@gmail.com`;
  document.getElementById("email").value = newEmail;
  document.getElementById("password").value = "12345678"; 
  document.getElementById("confirmPassword").value = "12345678"; 
  alert(`Correo generado: ${newEmail} \nContraseña: 12345678`);
});

document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
  }

  localStorage.setItem("savedEmail", email);
  localStorage.setItem("savedPassword", password);

  alert("Registro exitoso. Ahora puedes iniciar sesión.");
  window.location.href = "index.html";
});