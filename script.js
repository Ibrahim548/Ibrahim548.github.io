// --- Toggle menu mobile ---
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// --- Toggle dark mode ---
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

// --- FAQ toggle answers ---
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    // Fermer toutes les autres réponses si souhaité
    document.querySelectorAll('.faq-answer').forEach(ans => {
      if (ans !== answer) {
        ans.style.display = 'none';
      }
    });

    // Toggle la réponse sélectionnée
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});