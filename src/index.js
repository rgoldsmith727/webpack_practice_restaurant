import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello, Restaurant';

  return element;
}

document.body.appendChild(component());