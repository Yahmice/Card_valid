import './mainTitle.css';

export default class MainTitle {
  constructor() {
    this.element = document.createElement('h1');
    this.element.classList.add('main-title');
    this.element.textContent = 'Check your credit card number';
  }
}