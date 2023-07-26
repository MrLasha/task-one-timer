const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (seconds) => {
    timer = setInterval(function () {
      seco = seconds % 60;
      minutes = (seconds / 60) % 60;
      hour = (seconds / 60 / 60) % 60;
      if (seconds <= 0) {
        alert('Время закончилось');
      } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seco}`;
        timerEl.innerHTML = strTimer;
        buttonEl.disabled = true;
      }
      --seconds;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

let isNumber = () => {
  if (isNaN(inputEl.value)) {
    inputEl.value = '';
    return inputEl.value;
  }
};

inputEl.addEventListener('input', () => {});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);
  isNumber();
});
