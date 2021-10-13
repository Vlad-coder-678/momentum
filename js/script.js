// config

// const checkboxSliderIsAutomatical = document.getElementById(
//   "checkboxSliderIsAutomatical"
// );

// сохраняем данные пользователя в localStorage

function setLocalStorage() {
  localStorage.setItem("userName", inputNameEl.value);
}
window.addEventListener("beforeunload", setLocalStorage); // перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить

function getLocalStorage() {
  if (localStorage.getItem("userName")) {
    inputNameEl.value = localStorage.getItem("userName");
  }
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

function showGreeting() {
  // функция, которая будет отображать приветствие внутри указанного элемента
  const greetingEl = document.querySelector(".greeting"); // элемент, внутри которого выводится текст приветствия

  function getTimeOfDay() {
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

  const timeOfDay = getTimeOfDay(); // Определить текущее время суток
  const greetingText = `Good ${timeOfDay}, `; // Сгенерировать приветствие в зависимости от времени суток
  greetingEl.textContent = greetingText; // вывод времени в указанное поле
}

// greeting

const inputNameEl = document.querySelector(".inputUserName");
inputNameEl.addEventListener("blur", setUserName);

function setUserName() {
  localStorage.setItem("userName", inputNameEl.value);
}
  
// slider

// const images = { morning: [], day: [], evening: [], night: [] };
// const body = document.querySelector("body"); // element for slider
// const prev = document.querySelector("slide-prev"); // button prev slide
// const next = document.querySelector("slide-next"); // button next slide

// let index = 0;

// const activeSlide = (n) => {
//   for (slide of slides) {
//     slide.classList.remove("active");
//   }
//   slides[n].classList.add("active");
// };

// // отработчик нажатия предидущий слайд
// const prevSlide = () => {
//   if (index == slides.length - 1) {
//     index = 0;
//     activeSlide(index);
//   } else {
//     index++;
//     activeSlide(index);
//   }
// };

// // отработчик нажатия следующий слайд
// const nextSlide = () => {
//   if (index == slides.length - 1) {
//     index = 0;
//     activeSlide(index);
//   } else {
//     index++;
//     activeSlide(index);
//   }
// };

// // по нажатию на кнопку прев срабатывает функция мув лефт
// prevButton.addEventListener("click", function () {
//   moveLeft();
// });

// // по нажатию на кнопку некст срабатывает функция мув райт
// nextButton.addEventListener("click", function () {
//   moveRight();
// });

// body.style.backgroundImage =
//   "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";

// //  находим чекбокс который отвечает за автоматику слайдера
// const sliderCheckbox = document.getElementById("sliderCheckbox");

// sliderCheckbox.addEventListener("change", function () {
//   if (this.checked) {
//     setInterval(function () {
//       moveRight();
//     }, 3000);
//   }
// });

// var slideCount = document.querySelector("#slider ul li").length;
// var slideWidth = document.querySelector("#slider ul li").width();
// var slideHeight = document.querySelector("#slider ul li").height();
// var sliderUlWidth = slideCount * slideWidth;

// $("#slider").css({ width: slideWidth, height: slideHeight });

// $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });

// $("#slider ul li:last-child").prependTo("#slider ul");
