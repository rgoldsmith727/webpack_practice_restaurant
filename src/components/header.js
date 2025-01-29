function header() {
  const header = document.createElement('header');
  header.id = 'header';
  const h1 = document.createElement('h1');
  h1.textContent = 'Webpack Restaurant';
  header.appendChild(h1);
  document.body.appendChild(header);
}

export default header;