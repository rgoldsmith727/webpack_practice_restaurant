const contact = () => {
  const h2 = document.createElement('h2');
  h2.textContent = 'Contact Us';
  h2.id = 'contact';

  const p = document.createElement('p');
  p.textContent = 'For reservations, call 123-456-7890';

  document.body.appendChild(h2);
  document.body.appendChild(p);
}

export default contact;