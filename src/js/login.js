// Simulación de usuarios
const users = [
    { username: 'admin', password: '1234' },
    { username: 'user', password: 'password' }
  ];
  
  // Login
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const errorMessage = document.getElementById('error-message');
      
      const user = users.find(u => u.username === username && u.password === password);
      
      if (user) {
        // Guardar usuario en el almacenamiento y redirigir
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'pages/menu.html';
      } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
      }
    });
  }
  
  // Menú Principal
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      // Eliminar sesión y redirigir al login
      localStorage.removeItem('loggedInUser');
      window.location.href = 'index.html';
    });
  }
  