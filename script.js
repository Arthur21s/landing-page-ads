// Seleciona o botão de menu (hamburger) e a lista de links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Adiciona um "ouvinte de evento" para o clique no botão
menuToggle.addEventListener('click', () => {
    // Alterna a classe 'active' na lista de links para mostrar/esconder o menu.
    navLinks.classList.toggle('active');
});

// Opcional: Fechar o menu ao clicar em um link
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        // Remove a classe 'active' para fechar o menu após o clique e navegação
        navLinks.classList.remove('active');
    });
});