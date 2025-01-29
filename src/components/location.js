function location() {
  const location = document.createElement('section');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  location.id = 'location';

  h2.textContent = 'Location';
  p.textContent = '123 Main St. Anytown, USA';

  location.appendChild(h2);
  location.appendChild(p);

  document.body.appendChild(location);
}

export default location;