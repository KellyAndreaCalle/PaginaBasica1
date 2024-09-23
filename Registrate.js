document.getElementById('limpiar').addEventListener('click', function() {
    document.getElementById('registroForm').reset();
});

document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario guardado');
});