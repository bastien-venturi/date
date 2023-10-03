//ex1

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
        timeZoneName: 'short'
    });
    const dateformat = formatter.format(datecity);

    const para = document.createElement('p');
    para.textContent = `${dateformat}`;
    section.appendChild(para);

    return dateformat;
}

const charleroiDate = date('Charleroi', 'Europe/Brussels');
const anchorageDate = date('Anchorage', 'America/Anchorage');
const stpetersburgDate = date('Saint-Pétersbourg', 'Europe/Moscow');

//ex2

const birth = new Date('1985-06-30');
const currentTime = Date.now();
const birthTime = birth.getTime();
const timeDifference = currentTime - birthTime;
const daysPassed = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

const titleBirthday = document.createElement('h1');
titleBirthday.textContent = `How many days have passed since your birth?`;
const displayBirthday = document.createElement('p');
displayBirthday.textContent = `I was born on 30/06/1985 and have therefore lived ${daysPassed} days.`;
const section2 = document.createElement('section');
section2.appendChild(titleBirthday);
section2.appendChild(displayBirthday);
main.appendChild(section2);

const inputDate = document.createElement('input');
inputDate.type = "date";
inputDate.placeholder = 'Enter date';
//ex 2.2
const calculatebutton = document.createElement('button');
calculatebutton.textContent = 'GO!';
calculatebutton.addEventListener('click', () => {
    const userEnteredDate = new Date(inputDate.value);
    const currenttime = Date.now();
    const userEnteredTime = userEnteredDate.getTime();
    const timeDifferencePrompt = currenttime - userEnteredTime;
    const promptass = Math.floor(timeDifferencePrompt / (24 * 60 * 60 * 1000));
    
    displaytitrex2.textContent = `You have lived ${promptass} days.`;
});

const titleEx2 = document.createElement('h1');
titleEx2.textContent = `How many days have passed since your date?`;
const displaytitrex2 = document.createElement('p');
const section3 = document.createElement('section');
section3.appendChild(titleEx2);
section3.appendChild(inputDate);
section3.appendChild(calculatebutton);
section3.appendChild(displaytitrex2);
main.appendChild(section3);

//ex3

const titrex3 = document.createElement('h1');
titrex3.textContent = "Enter a number of hours";
let section4 = document.createElement('section');
main.appendChild(section4)
section4.appendChild(titrex3);

const input = document.createElement('input');
input.setAttribute('type', 'number');
input.setAttribute('id', 'hoursInput');
input.setAttribute('placeholder', 'Enter hours');


const outputDiv = document.createElement('div');
outputDiv.setAttribute('id', 'output');


section4.appendChild(input);
section4.appendChild(outputDiv);

const hoursInput = document.getElementById('hoursInput');
const outputContainer = document.getElementById('output');

function calculateFutureDate(hours) {
    const now = new Date();
    const futureDate = new Date(now.getTime() + hours * 3600000);

    const options = { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        timeZoneName: 'short' 
    };
    const formattedFutureDate = futureDate.toLocaleDateString('fr-BE', options);

    outputContainer.textContent = `In ${hours} hours, it will be: ${formattedFutureDate}`;
}

hoursInput.addEventListener('keyup', () => {
    const hours = parseInt(hoursInput.value);
    if (!isNaN(hours)) {
        calculateFutureDate(hours);
    } else {
        outputContainer.textContent = '';
    }
});
