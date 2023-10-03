const dateElement = document.querySelector('#date');
const timeElement = document.querySelector('#time');

function formatDate(date) {
    const options = {
        weekday: 'short',
        year: '2-digit',
        month: 'short',
        day: '2-digit',
    };
    return date.toLocaleDateString('en-US', options);
}

function formatTime(date) {
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    return date.toLocaleTimeString('en-US', options);
}

function updateDateTime() {
    const dateCity = new Date();
    const formattedDate = formatDate(dateCity);
    const formattedTime = formatTime(dateCity);

    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

setInterval(updateDateTime, 1000);


updateDateTime();
