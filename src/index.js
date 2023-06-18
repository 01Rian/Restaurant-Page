import { renderHomePage } from './home/home';
import { renderMenuPage } from './menu/menu';
import { renderContactPage } from './contact/contact';
import logo from './assets/logo.jpg';
import './style.css';

export function renderPage() {
  const imgLogo = document.createElement('div');
  imgLogo.classList.add('logo');
  imgLogo.innerHTML = `
   <img src="${logo}">
  `;

  const header = document.createElement('div');
  header.classList.add('header');

  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', () => navigateToPage(renderHomePage));

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', () => navigateToPage(renderMenuPage));

  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', () =>
    navigateToPage(renderContactPage)
  );

  header.appendChild(homeButton);
  header.appendChild(menuButton);
  header.appendChild(contactButton);

  const contentDiv = document.getElementById('content');

  contentDiv.appendChild(imgLogo);
  contentDiv.appendChild(header);
}

function navigateToPage(renderFunction) {
  const contentDiv = document.getElementById('content');

  contentDiv.classList.add('transition-page', 'slide-out');

  setTimeout(() => {
    contentDiv.innerHTML = '';

    renderFunction();

    setTimeout(() => {
      contentDiv.classList.remove('slide-out');
      contentDiv.classList.add('slide-in');
    }, 20);
  }, 300);

  setTimeout(() => {
    contentDiv.classList.remove('transition-page', 'slide-in');
  }, 600);
}

window.addEventListener('load', renderHomePage);
