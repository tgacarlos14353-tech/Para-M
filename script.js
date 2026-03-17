const card = document.getElementById('card');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', () => {
  card.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  card.classList.remove('open');
});

let currentPage = 0;
const pages = document.querySelectorAll('.page');
const nextBtn = document.getElementById('nextPage');

nextBtn.addEventListener('click', () => {
  pages[currentPage].classList.remove('active');
  currentPage++;

  if (currentPage >= pages.length) {
    currentPage = 0;
  }

  pages[currentPage].classList.add('active');
});
