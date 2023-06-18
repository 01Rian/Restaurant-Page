import { renderPage } from '../index';

export function renderMenuPage() {
  renderPage();

  const contentDiv = document.getElementById('content');

  const sectionMenu = document.createElement('div');
  sectionMenu.classList.add('sectionMenu');
  sectionMenu.innerHTML = `
    <img src="../src/assets/food1.jpg" alt="food-image">
    <img src="../src/assets/food2.jpg" alt="food-image">
    <img src="../src/assets/food3.jpg" alt="food-image">
    <img src="../src/assets/food4.jpg" alt="food-image">
    <img src="../src/assets/food5.jpg" alt="food-image">
    <img src="../src/assets/food6.jpg" alt="food-image">
    <img src="../src/assets/food7.jpg" alt="food-image">
    <img src="../src/assets/food8.jpg" alt="food-image">
    <img src="../src/assets/food9.jpg" alt="food-image">
    <img src="../src/assets/food10.jpg" alt="food-image">
    <img src="../src/assets/food11.jpg" alt="food-image">
    <img src="../src/assets/food12.jpg" alt="food-image">
    <img src="../src/assets/food13.jpg" alt="food-image">
    <img src="../src/assets/food14.jpg" alt="food-image">
    <img src="../src/assets/food15.jpg" alt="food-image">
  `;

  const footer = document.createElement('div');
  footer.classList.add('footer');
  const date = new Date();
  footer.textContent = `Copyright © ${date.getFullYear()} Rian Santos`;

  contentDiv.appendChild(sectionMenu);
  contentDiv.appendChild(footer);
}
