import './index.css';
import './index.html';
import LOGO_IMG from './assets/JS-logo.png';

console.log('Hello World! This is Webpack!');

const bodyElement = document.body; 

const titleElement = document.createElement('h1');
titleElement.innerText = 'I love JavaScript';

const imageElement = document.createElement('img');
imageElement.src = LOGO_IMG;

bodyElement.append(titleElement, imageElement);