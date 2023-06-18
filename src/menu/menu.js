import { renderPage } from '../index';
import icon1 from '../assets/food1.jpg';
import icon2 from '../assets/food2.jpg';
import icon3 from '../assets/food3.jpg';
import icon4 from '../assets/food4.jpg';
import icon5 from '../assets/food5.jpg';
import icon6 from '../assets/food6.jpg';
import icon7 from '../assets/food7.jpg';
import icon8 from '../assets/food8.jpg';
import icon9 from '../assets/food9.jpg';
import icon10 from '../assets/food10.jpg';
import icon11 from '../assets/food11.jpg';
import icon12 from '../assets/food12.jpg';
import icon13 from '../assets/food13.jpg';
import icon14 from '../assets/food14.jpg';
import icon15 from '../assets/food15.jpg';

export function renderMenuPage() {
  renderPage();

  const contentDiv = document.getElementById('content');

  const sectionMenu = document.createElement('div');
  sectionMenu.classList.add('sectionMenu');
  sectionMenu.innerHTML = `
    <img src="${icon1}" alt="food-image">
    <img src="${icon2}" alt="food-image">
    <img src="${icon3}" alt="food-image">
    <img src="${icon4}" alt="food-image">
    <img src="${icon5}" alt="food-image">
    <img src="${icon6}" alt="food-image">
    <img src="${icon7}" alt="food-image">
    <img src="${icon8}" alt="food-image">
    <img src="${icon9}" alt="food-image">
    <img src="${icon10}" alt="food-image">
    <img src="${icon11}" alt="food-image">
    <img src="${icon12}" alt="food-image">
    <img src="${icon13}" alt="food-image">
    <img src="${icon14}" alt="food-image">
    <img src="${icon15}" alt="food-image">
  `;

  const footer = document.createElement('div');
  footer.classList.add('footer');
  const date = new Date();
  footer.textContent = `Copyright © ${date.getFullYear()} Rian Santos`;

  contentDiv.appendChild(sectionMenu);
  contentDiv.appendChild(footer);
}
