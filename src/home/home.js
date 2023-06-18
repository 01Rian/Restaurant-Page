import { renderPage } from '../index';

export function renderHomePage() {
  renderPage();

  const contentDiv = document.getElementById('content');

  const sectionImg = document.createElement('div');
  sectionImg.classList.add('sectionHome');
  sectionImg.innerHTML = `
  <div>Food Blog Made For You</div>
  <img src="../src/assets/table.jpg" alt="table-image">
  `;

  const main = document.createElement('div');
  main.classList.add('main');
  main.innerHTML = `
    <h1>A Genuine Fine-Dining Experience Awaits</h1>
    <p>It´s time to enjoy the finer things in life</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, qui, nihil, minus deleniti natus architecto a facere officia fuga voluptates optio perspiciatis eius velit. Repellat placeat soluta aliquid fugit eaque!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam repellat culpa, ex laborum eius sed ratione tempora dolores eum suscipit nostrum dicta maiores dolorem minima. Autem veritatis nobis quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus accusamus labore obcaecati laborum optio exercitationem quod quae ad eius qui officia quisquam animi esse, incidunt facilis! Autem, in consectetur.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nesciunt nisi quo sint fugit provident eum voluptate qui, a, perferendis ab nulla. Ratione, veniam nihil perspiciatis odio fugit similique blanditiis!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nesciunt nisi quo sint fugit provident eum voluptate qui, a, perferendis ab nulla. Ratione, veniam nihil perspiciatis odio fugit similique blanditiis!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nesciunt nisi quo sint fugit provident eum voluptate qui, a, perferendis ab nulla. Ratione, veniam nihil perspiciatis odio<br><br>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nesciunt nisi quo sint fugit provident eum voluptate qui, a, perferendis ab nulla. Ratione, veniam nihil perspiciatis odio fugit similique blanditiis!    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nesciunt nisi quo sint fugit provident eum voluptate qui, a, perferendis ab nulla. Ratione, veniam nihil perspiciatis odio fugit similique blanditiis!    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nesciunt nisi quo sint fugit provident eum voluptate qui, a, perferendis ab nulla. Ratione, veniam nihil perspiciatis odio fugit similique blanditiis!    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nesciunt nisi quo sint fugit provident eum voluptate qui, a, perferendis ab nulla. Ratione, veniam nihil perspiciatis odio fugit similique blanditiis!    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nesciunt nisi quo sint fugit provident eum voluptate qui, a, perferendis ab nulla. Ratione, veniam nihil perspiciatis odio fugit similique blanditiis!    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nesciunt nisi quo sint fugit provident eum voluptate qui, a, perferendis ab nulla. Ratione, veniam nihil perspiciatis odio fugit similique blanditiis!</p>
    <button>More info</button>
  `;

  const footer = document.createElement('div');
  footer.classList.add('footer');
  const date = new Date();
  footer.textContent = `Copyright © ${date.getFullYear()} Rian Santos`;

  contentDiv.appendChild(sectionImg);
  contentDiv.appendChild(main);
  contentDiv.appendChild(footer);
}
