let body = document.querySelector('body');
let main = document.createElement('main');
body.appendChild(main);

function date(city, timeZone) {
    const section = document.createElement('section');
    const titre = document.createElement('h1');
    titre.textContent = city;
    main.appendChild(section);
    section.appendChild(titre);

    const datecity = new Date();

    const formatter = new Intl.DateTimeFormat('fr-BE', {
        timeZone: timeZone,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });
    const dateformat = formatter.format(datecity);

    const para = document.createElement('p');
    para.textContent = `${dateformat}`;
    section.appendChild(para);

    return dateformat; 
}

const charleroiDate = date('Charleroi', 'Europe/Brussels');
const ancorageDate = date('Ancorage', 'America/Anchorage');
const stpetersburgsate = date('Saint-Pétersbourg', 'Europe/Moscow');


const birth = new Date('1990-01-01');
const currentime = Date.now();
const birthtime = birth.getTime();
const timedifference = currentime - birthtime ;
const dayspass = Math.floor(timedifference / (24 * 60 * 60 * 1000));

console.log();

const titrebirthday = document.createElement('h1');
titrebirthday.textContent = `how many days since you were born?`;
const displaybirthday = document.createElement('p');
displaybirthday.textContent = `you have lived  ${dayspass} days.`;
const section = document.createElement('section');
section.appendChild(titrebirthday);
section.appendChild(displaybirthday);
main.appendChild(section)





