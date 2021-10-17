// import playlist from "./playlist.js";

const playlist = [
  {
    title: "Aqua Caelestis",
    src: "./assets/sounds/Aqua Caelestis.mp3",
    duration: "00:58",
  },
  {
    title: "Ennio Morricone",
    src: "./assets/sounds/Ennio Morricone.mp3",
    duration: "03:50",
  },
  {
    title: "River Flows In You",
    src: "./assets/sounds/River Flows In You.mp3",
    duration: "03:50",
  },
  {
    title: "Summer Wind",
    src: "./assets/sounds/Summer Wind.mp3",
    duration: "03:50",
  },
];

// config

// const checkboxSliderIsAutomatical = document.getElementById(
//   "checkboxSliderIsAutomatical"
// );

// сохраняем данные пользователя в localStorage

function setLocalStorage() {
  localStorage.setItem("userName", inputNameEl.value);
  localStorage.setItem("city", inputCity.value);
}
window.addEventListener("beforeunload", setLocalStorage); // перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить

function getLocalStorage() {
  if (localStorage.getItem("userName")) {
    inputNameEl.value = localStorage.getItem("userName");
  }
  if (localStorage.getItem("city")) {
    inputCity.value = localStorage.getItem("city");
  } else {
    inputCity.value = "Minsk";
  }
  // getWeather();
}
window.addEventListener("load", getLocalStorage);

// display time

function showTime() {
  const timeEl = document.querySelector(".time"); // элемент куда поместим время
  const date = new Date(); // текущая дата + время
  const currentTime = date.toLocaleTimeString(); // текущее время
  timeEl.textContent = currentTime; // вывод времени в указанное поле
  showDate(); // при изменении даты обновляем её отображение на страницы
  showGreeting();
  setTimeout(showTime, 1000); // для обновления времени каждую секунду
}
showTime();

// display date

function showDate() {
  // создаём функцию, которая будет отображать дату внутри указанного элемента
  const dateEl = document.querySelector(".date"); // находим элемент, внутри которого выводится дата
  const date = new Date(); // текущая дата + время
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  const currentDate = date.toLocaleDateString("en-US", options); // получаем текущую дату в указанном формате
  dateEl.textContent = currentDate; // вывод времени в указанное поле
}

// greeting

function getTimeOfDay() {
  // Определить текущее время суток
  const TIMES_OF_DAY = {
    MORNING: "morning",
    DAY: "day",
    EVENING: "evening",
    NIGHT: "night",
  }; // времена суток
  const date = new Date(); // текущая дата + время
  const hours = date.getHours(); // текущее время в часах
  if (hours < 6) {
    return TIMES_OF_DAY.NIGHT;
  } else if (hours >= 6 && hours < 12) {
    return TIMES_OF_DAY.MORNING;
  } else if (hours >= 12 && hours < 18) {
    return TIMES_OF_DAY.DAY;
  } else {
    return TIMES_OF_DAY.EVENING;
  }
}

function showGreeting() {
  // функция, которая будет отображать приветствие внутри указанного элемента
  const greetingEl = document.querySelector(".greeting"); // элемент, внутри которого выводится текст приветствия
  const timeOfDay = getTimeOfDay(); // Определить текущее время суток
  const greetingText = `Good ${timeOfDay},`; // Сгенерировать приветствие в зависимости от времени суток
  greetingEl.textContent = greetingText; // вывод времени в указанное поле
}

// greeting

const inputNameEl = document.querySelector(".inputUserName");

// bg page

let randomNum;
const imagesLength = 20;

function getRandomNum() {
  const ranNum = Math.floor(Math.random() * imagesLength);
  randomNum = ranNum === 0 ? 1 : ranNum;
}
getRandomNum();

function setBg() {
  const body = document.querySelector("body"); // outer of slider
  const timeOfDay = getTimeOfDay(); // текущее время суток
  const bgNum = `${randomNum}`.padStart(2, "0");
  const urlImage = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  const img = new Image();
  img.src = urlImage;
  img.onload = () => {
    body.style.backgroundImage = `url(${urlImage})`;
  };
}
setBg();

// slider

const slidePrev = document.querySelector(".slide-prev"); // button prev slide
const slideNext = document.querySelector(".slide-next"); // button next slide

function getSlidePrev() {
  // уменьшаете рандомное число на единицу, пока оно больше 1. Если результат вычитания равен 1, следующему за ним числу присваиваете значение 20. Внутри этих функций вызываете функцию setBg(), обновляющую фоновое изображение.
  if (randomNum <= 1) {
    randomNum = imagesLength;
  } else {
    randomNum--;
  }
  setBg();
}

function getSlideNext() {
  // увеличивает рандомное число на 1 пока результат не станет равным 20. Если результат сложения равен 20, следующему за ним числу присваиваете значение 1
  if (randomNum >= imagesLength) {
    randomNum = 1;
  } else {
    randomNum++;
  }
  setBg();
}

slidePrev.addEventListener("click", getSlidePrev); // отработчик нажатия предидущий слайд
slideNext.addEventListener("click", getSlideNext); // отработчик нажатия следующий слайд

// //  находим чекбокс который отвечает за автоматику слайдера
// const sliderCheckbox = document.getElementById("sliderCheckbox");

// sliderCheckbox.addEventListener("change", function () {
//   if (this.checked) {
//     setInterval(function () {
//       moveRight();
//     }, 3000);
//   }
// });

// weather

const inputCity = document.querySelector("input.city");

async function getWeather() {
  const cityName = inputCity.value;
  const API_KEY = "14dd794d0d68a886f0e8375850edf202";
  const LANGS = { RU: "ru", EN: "en" };
  const UNITS = { METRIC: "metric", IMPERIAL: "imperial" };
  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${LANGS.EN}&appid=${API_KEY}&units=${UNITS.METRIC}`;
  const res = await fetch(urlWeather);
  if (res.status !== 200) {
    const weatherError = document.querySelector(".weather-error");
    weatherError.textContent = `*${res.statusText}`;
  }
  const data = await res.json();

  const weatherIcon = document.querySelector(".weather-icon");
  const temperature = document.querySelector(".temperature");
  const weatherDescription = document.querySelector(".weather-description");
  const weatherWind = document.querySelector(".wind");
  const weatherHumidity = document.querySelector(".humidity"); // облачность

  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
  weatherWind.textContent = `Wind speed: ${data.wind.speed} m/s`;
  weatherHumidity.textContent = `Humidity: ${data.main.humidity}%`;
}

// inputCity.addEventListener("change", getWeather);

// quote

async function getQuotes() {
  const quoteEl = document.querySelector(".quote");
  const quoteAuthorEl = document.querySelector(".author");
  const quoteErrorEl = document.querySelector(".quote-error");

  const quotes = "./assets/dataQuote.json";
  const res = await fetch(quotes);
  const data = await res.json();

  let quote =
    "Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете";
  let author = "Стив Макконнелл";
  let quoteError = "";

  if (res.status === 200) {
    const randomNumber = Math.floor(Math.random() * data.length);
    randomIndexQuote = randomNumber === 3 ? 2 : randomNumber;
    quote = data[randomIndexQuote].text;
    author = data[randomIndexQuote].author;
    quoteError = "";
  } else {
    quoteError = res.statusText;
  }

  quoteEl.textContent = quote;
  quoteAuthorEl.textContent = author;
  quoteErrorEl.textContent = quoteError;
}

getQuotes();

// Ещё один способ работы с асинхронными данными - fetch (менее читабельный)

// function getQuotes() {
// const quotes = 'data.json';
// fetch(quotes)
// .then(res => res.json())
// .then(data => { console.log(data); });
// }
// getQuotes();

// audioplayer

let isPlay = false;
let playNum = 0;
const audio = new Audio();
audio.src = playlist[playNum].src;
let playlistLength = playlist.length;

const playButton = document.querySelector(".play");
const prevButton = document.querySelector(".play-prev");
const nextButton = document.querySelector(".play-next");
const playlistContainer = document.querySelector("ul.play-list");
const progressBar = document.querySelector(".progress-bar");
const toggleVisiblePlaylist = document.querySelector(
  ".toggle-visible-playlist"
);

playButton.addEventListener("click", () => {
  if (isPlay) {
    audioPause();
  } else {
    audioPlay(playNum);
  }
});
prevButton.addEventListener("click", playPrev);
nextButton.addEventListener("click", playNext);

playlist.forEach((el, index) => {
  const li = document.createElement("li");
  li.classList.add("play-item");
  li.addEventListener("click", () => {
    audioPlay(index);
  });
  li.textContent = playlist[index].title;
  playlistContainer.append(li);
});

function audioPlay(index) {
  if (playButton.classList.contains("pause")) {
    playButton.classList.remove("pause");
  }
  playNum = index;
  audio.src = playlist[index].src;
  audio.currentTime = 0;
  audio.play();
  playButton.classList.add("pause");
  isPlay = true;
  playlistContainer.childNodes.forEach((el, index) => {
    if (el.classList.contains("item-active")) {
      el.classList.remove("item-active");
    }
    if (playNum === index) {
      el.classList.add("item-active");
    }
  });
}

function audioPause() {
  audio.pause();
  if (playButton.classList.contains("pause")) {
    playButton.classList.remove("pause");
  }
  isPlay = false;
}

function playNext() {
  if (playNum >= playlistLength - 1) {
    playNum = 0;
  } else {
    playNum += 1;
  }
  audioPlay(playNum);
}

function playPrev() {
  if (playNum <= 0) {
    playNum = playlistLength - 1;
  } else {
    playNum -= 1;
  }
  audioPlay(playNum);
}

toggleVisiblePlaylist.addEventListener("click", () => {
  if (playlistContainer.classList.contains("unvisible")) {
    playlistContainer.classList.remove("unvisible");
  } else {
    playlistContainer.classList.add("unvisible");
  }
});
