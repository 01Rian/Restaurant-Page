import { renderPage } from '../index';

export function renderContactPage() {
  renderPage();

  const contentDiv = document.getElementById('content');

  const mainContact = document.createElement('div');
  mainContact.classList.add('mainContact');
  mainContact.innerHTML = `
    <div class="contact-title">
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
    </div>
    <div class="contact-map">
        <img src="../src/assets/map.png" alt="food-image">
    </div>
    <div class="contact-card">
    <div>
        <p>Empire State Building</p>
        <p>350 5th Ave, New York, NY 10118 <br>1 212-736-3100</p>
    </div>
    <div>
        <p>More Info</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
    </div>
    </div>
    `;

  const footer = document.createElement('div');
  footer.classList.add('footer');
  const date = new Date();
  footer.textContent = `Copyright © ${date.getFullYear()} Rian Santos`;

  contentDiv.appendChild(mainContact);
  contentDiv.appendChild(footer);
}
