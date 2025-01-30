import './style.css';
import header from './components/header';
import info from './components/info';
import hours from './components/hours';
import location from './components/location';
import menu from './components/menu';
import contact from './components/contact';

document.body.id = 'content';

const nav = () => {
  const navBar = document.createElement('nav');
  const btnArr = ['Home', 'Menu', 'Contact'];
  navBar.id = 'nav';

  btnArr.forEach((text) => {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.id = `${text.toLowerCase()}-btn`;
    btn.addEventListener('click', () => {
      const content = document.getElementById('content');
      content.innerHTML = '';
      switch (text) {
        case 'Home':
          nav();
          header();
          info();
          hours();
          location();
          break;
        case 'Menu':
          nav();
          header();
          menu();
          break;
        case 'Contact':
          nav();
          header();
          contact();
          break;
    }
  })
  navBar.appendChild(btn);
})
document.body.appendChild(navBar);
}

nav();
header();
info();
hours();
location();





