// Efecto de cambio de color en el header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? '#ffffffee' : '#ffffff';
});

// Función para el botón del Hero
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Manejo del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`¡Gracias ${name}! Hemos recibido tu mensaje (Simulación).`);
    this.reset();
});