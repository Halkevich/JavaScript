//=============================Часы и календарь=====================
import playList from './playList.js';
const time = document.querySelector('time');//=======================Поиск Элементов
const date = document.querySelector('date');


time.textContent = 'Добро Пожаловать';

// ========================часы

function showTime() {

    const date = new Date();
    const currentTime = date.toLocaleTimeString()

    time.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    setTimeout(showTime, showDate, showGreting, setLocalStorage, getLocalStorage, 1000)

    return currentTime
}
showTime();
time.innerHTML = showTime()


// =======================Дата


function showDate() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC' };
    const currentDate = date.toLocaleDateString('en-US', options);

    return currentDate

}

showDate()

date.innerHTML = showDate()



// =================Приветсвие
const greeting = document.querySelector('span.greeting');

greeting.innerHTML = showGreting()


function showGreting() {// getTimeOfDay

    // получим текущее время пользователя и компоненты этого времени
    let
        date = new Date(),
        hour = date.getHours(),
        message = '';

    // определим фразу приветствия в зависимости от местного времени пользователя 

    if (hour <= 6) {
        message = 'Good time of day';
    } else if (hour <= 12) {
        message = 'Good morning ';
    } else if (hour <= 18) {
        message = 'afternoon';
    } else if (hour <= 21) {
        message = 'Good evening';
    } else if (hour <= 23) {
        message = 'Good night';
    }

    return message

}

showGreting()



//Пользователь может ввести свое имя, значение сохраняется в local storage

const userNameLocal = document.querySelector('input.name') // поиск элемента


console.log(userNameLocal)

function setLocalStorage() {
    localStorage.setItem('name', userNameLocal.value); // сохранение в local storage
}

window.addEventListener('beforeunload', setLocalStorage)



function getLocalStorage() {
    if (localStorage.getItem('name')) {
        userNameLocal.value = localStorage.getItem('name')
    }
}

//localStorage.setItem -метод сохраняющий данные в local storage есть два параметра имя значения, которое сохраняется и само значение которое сохраняется
//localStorage.getItem - это метод получающий данные из local storsge. Параметр метода - имя, под которым сохраняется значение.
window.addEventListener('load', getLocalStorage)


// userNameLocal.addEventListener('click', () => { // слушатель событий
//     console.log('привет')
// })







const body = document.querySelector('body')

function getRandomInt(max) {

    return Math.floor(Math.random() * max);


}

getRandomInt(20)


//запись в массив объект с фотографиями
let array = [];
const setData = (data) => {
    array = data.photos.photo;
    return array


};


//создание фонового изображения

function setBg() {
    // const img = new Image();  // поискать способ заполнения
    const timeOfDay = showGreting()
    const bgNum = getRandomInt(100)
    // body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    // body.style.backgroundImage = `url('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=86038a4978dbb4bcde9f9e8d800f4f85&tags=nature&extras=url_l&format=json&nojsoncallback=1';)`;

    // запрос к серверу с фотографиями  вернулся  объект                               с
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=86038a4978dbb4bcde9f9e8d800f4f85&tags=nature&extras=url_l&format=json&nojsoncallback=1')
        .then((response) => {
            return response.json();
        })
        .then((data) => setData(data))
        .then((array) => {
            body.style.backgroundImage = `url(${array[bgNum].url_l};)`;

        });




    // img.src = `url('https://answit.com/wp-content/uploads/2017/01/full-hd.jpg')`
    // img.addEventListener('load', () => {
    //     body.style.backgroundImage = img;
    // })





}

setBg()



//==============Слайдер==============

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let randomNum = getRandomInt();

function getSlideNext() {

    if (randomNum > 20) {
        randomNum = 1;
    } else {
        randomNum++
    }
    setBg()


}

function getSlidePrev() {

    if (randomNum = 0) {
        randomNum = 1;
    } else {
        randomNum--
    }

    setBg()

}


next.addEventListener('click', getSlideNext)


prev.addEventListener('click', getSlidePrev)

// Погода
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const userName = document.querySelector('input.city')




async function getWeather(value) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;


}

userName.addEventListener('change', function () {
    getWeather(userName.value)
});


getWeather()


//цитата дня


// async function getQuotes() {

//     const quotes = 'data.json';
//     const res = await fetch(quotes);
//     const data = await res.json();
//     console.log(data);
// }
// getQuotes();



const round = document.querySelector('button.change-quote');

const quote = document.querySelector('.quote');

const author = document.querySelector('.author');

round.addEventListener('click', function () {
    getQuotes()
})
console.log(round)

async function getQuotes() {

    const quotes = 'https://type.fit/api/quotes';
    const res = await fetch(quotes);
    const data = await res.json();

    const quetesText = data[Math.floor(Math.random() * quotes.length)]


    return quote.innerHTML = quetesText.text, author.innerHTML = quetesText.author
}
getQuotes();




//Аудиоплеер





const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
let isPlay = false;
const audio = new Audio();




console.log(isPlay)
function playAudio() {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();

    isPlay = true


}




function pauseAudio() {

    audio.pause();

    isPlay = false



}




const button = document.querySelector('button.play');


function toggleBtn() {
    button.classList.toggle('pause');

    if (!isPlay) {
        playAudio()
    } else {
        pauseAudio()
    }
}
button.addEventListener('click', toggleBtn);



const playNextAudio = document.querySelector('.play-next')
const playPrevAudio = document.querySelector('.play-prev')
let playNum = 0


function playNext() {
    if (playNum > playList.length) {
        playNum = 0;
    } else {
        playNum++
    }

    playAudio()

}

function playPrev() {

    if (playNum = playList.length) {
        playNum = 1;
    } else {
        playNum--
    }

    playAudio()
}



playNextAudio.addEventListener('click', () => {

    playNext()
})

playPrevAudio.addEventListener('click', () => {
    playPrev()

})




