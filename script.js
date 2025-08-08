const toggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const current = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
const setTheme = theme => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  document.getElementById('icon-sun').style.display = theme === 'light' ? 'inline' : 'none';
  document.getElementById('icon-moon').style.display = theme === 'dark' ? 'inline' : 'none';
};
setTheme(current);
toggle.addEventListener('click', ()=> {
  setTheme(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark');
});
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('fanForm').addEventListener('submit', function(e){
  e.preventDefault();
  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const msgEl = document.getElementById('formMsg');
  if(!nome || !email){
    msgEl.textContent = 'Por favor preencha os dois campos.';
    return;
  }
  msgEl.textContent = 'Obrigado, ' + nome + '! 🏁 Sua inscrição foi recebida.';
  this.reset();
});
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', ()=> {
    const full = img.dataset.full || img.src;
    lightboxImg.src = full;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
  });
});
closeBtn.addEventListener('click', ()=> {
  lightbox.classList.remove('active');
  lightboxImg.src = '';
});
lightbox.addEventListener('click', (e)=> {
  if(e.target === lightbox) {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  }
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape' && lightbox.classList.contains('active')) {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  }
});
