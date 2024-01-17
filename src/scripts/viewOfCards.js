export function changeCardsView(view) {
  const listBtn = document.querySelector('.interesting-articles__btn-list');
  const gridBtn = document.querySelector('.interesting-articles__btn-grid');
  const cards = document.querySelector('.interesting-articles__cards');
  const cardList = document.querySelectorAll('.card');

  const isListView = view === 'list';

  localStorage.setItem('view', view);

  cards.classList.toggle('interesting-articles__cards--list', isListView);
  cards.classList.toggle('interesting-articles__cards--grid', !isListView);

  listBtn.classList.toggle('interesting-articles__btn--selected', isListView);
  gridBtn.classList.toggle('interesting-articles__btn--selected', !isListView);

  cardList.forEach((card) => {
    card.classList.toggle('card--list', isListView);
    card.firstElementChild.classList.toggle('card__img--list', isListView);
  });
}

const listBtn = document.querySelector('.interesting-articles__btn-list');
listBtn.addEventListener('click', () => changeCardsView('list'));

const gridBtn = document.querySelector('.interesting-articles__btn-grid');
gridBtn.addEventListener('click', () => changeCardsView('grid'));
