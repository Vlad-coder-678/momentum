// config

// const checkboxSliderIsAutomatical = document.getElementById(
//   "checkboxSliderIsAutomatical"
// );

// display time

function showTime() {
  const timeEl = document.querySelector(".time"); // элемент куда поместим время
  const date = new Date(); // текущая дата + время
  const currentTime = date.toLocaleTimeString(); // текущее время
  timeEl.textContent = currentTime; // вывод времени в указанное поле
  showDate(); // при изменении даты обновляем её отображение на страницы
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
