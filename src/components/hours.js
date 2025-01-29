function hours() {
  const hours = document.createElement('section');
  const h2 = document.createElement('h2');
  const ul = document.createElement('ul');

  hours.id = 'hours';

  let daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  daysArr.forEach((text) => {
    const day = document.createElement('li');
    day.textContent = `${['Thursday', 'Friday', 'Saturday'].includes(text)
                          ? `${text}: 8am - 11pm` : `${text}: 11am - 8pm`}`;
    ul.appendChild(day);
  })

  h2.textContent = 'Hours';
  hours.appendChild(h2);
  hours.appendChild(ul);
  document.body.appendChild(hours);
}

export default hours;