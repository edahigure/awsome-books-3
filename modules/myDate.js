import { DateTime } from './luxon.js';

const getDate = () => {
  const navBar = document.querySelector('.navBar');
  const newItem = document.createElement('div');
  const timeNow = DateTime.now().toFormat('MMMM dd, yyyy');

  newItem.className = 'myDate';
  newItem.innerHTML = `
           ${timeNow}
          `;
  navBar.appendChild(newItem);
};

export { getDate as default };
