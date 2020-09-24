import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const buttonStartRef = document.querySelector('button[data-action="start"]');
const buttonStopRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');

let randomValue;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeRandomColors = () => {
  bodyRef.style.backgroundColor = `${
    colors[randomIntegerFromInterval(0, colors.length)]
  }`;
};

buttonStartRef.addEventListener('click', () => {
  buttonStartRef.removeEventListener('click', makeRandomColors);
  buttonStartRef.setAttribute('disabled', 'true');
  randomValue = setInterval(makeRandomColors, 1000);
});

buttonStopRef.addEventListener('click', () => {
  buttonStartRef.addEventListener('click', makeRandomColors);
  buttonStartRef.removeAttribute('disabled');
  clearInterval(randomValue);
});
