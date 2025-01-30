const entrees = [
  {
    name: 'Tarantula Alfredo',
    price: 24.99
  },
  {
    name: 'Deep-Fried Tick Tacos',
    price: 19.99
  },
  {
    name: 'Roasted Scorpion',
    price: 21.99
  }
]

const menu = () => {
  const h2 = document.createElement('h2');
  h2.textContent = 'Menu';
  h2.id = 'menu';
  document.body.appendChild(h2);

  const ul = document.createElement('ul');
  ul.id = 'menu-items';
  document.body.appendChild(ul);

  entrees.forEach((entree) => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    
    h3.textContent = entree.name;
    p.textContent = `$${entree.price}`;

    li.appendChild(h3);
    li.appendChild(p);
    ul.appendChild(li);
  })

  document.body.appendChild(ul);
}

export default menu;