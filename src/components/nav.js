function nav() {
  const nav = document.createElement('nav');
  
  const btnArr = ['Home', 'Menu', 'Contact'];

  nav.id = 'nav';

  btnArr.forEach((text) => {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.id = `${text.toLowerCase()}-btn`;
    nav.appendChild(btn);
  })
  document.body.appendChild(nav);
}

export default nav;