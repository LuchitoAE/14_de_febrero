const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (name === 'Darssy' && password === '200220') {
        alert('¡Hola, ' + name + '! Bienvenido al programa.');
        window.location.href = '14_de_febrero.html';
    } else {
        alert('Lo siento, el nombre o la contraseña son incorrectos.');
    }
});