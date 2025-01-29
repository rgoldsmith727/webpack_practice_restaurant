function info() {
  const section = document.createElement('section');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  section.id = 'info';

  h2.textContent = 'Modern Web Cuisine';
  p.textContent = 'Not just spiders...delicacies from around the insect world!';

  section.appendChild(h2);
  section.appendChild(p);

  document.body.appendChild(section);  
}

export default info;