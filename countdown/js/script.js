const items = document.querySelectorAll('.countdown-item > h4 ')
const countdownElement = document.querySelectorAll('.contdown')
console.log(items);
// назначаем дату осчета

let countdownDate = new Date(2023, 6, 2, 10, 10, 0).getTime();

function getCountdownTime() {
    // получить текущее время

    const now = new Date().getTime();

    //найти разницу времени

    const distance = countdownDate - now;
    // 1с = 1000мс
    // 1ь = 60с
    // 1ч = 60мин
    // 1д = 24ч

    //Создаем переменные в милисикундах

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //Подсчет для дней часов минут и секунд

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);


    //сщздаем массив с переменнымип
    const values = [days, hours, minutes, seconds]

    console.log(values)


    //добавляем переменные на страницу

    items.forEach(function (item, index) {
        item.textContent = (values[index]);
    })

    if (distance < 0) {
        clearInterval(countdown)

        countdownElement.innerHTML = `'<h4 class = 'expired'>Время вышло </h4>'`
    }
}
// обновление счетчика каждую секунду
let countdown = setInterval(getCountdownTime, 1000)

// инициализация функции

getCountdownTime()