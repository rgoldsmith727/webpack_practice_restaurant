import './style.css';

function component() {
  const element = document.createElement('div');

  element.id = 'content';

  return element;
}

document.body.appendChild(component());