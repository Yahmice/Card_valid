import './cards.css';

import visa from '../../img/card-visa.svg';
import mastercard from '../../img/card-mastercard.svg';
import americanExpress from '../../img/card-americanExpress.svg';
import discoverCard from '../../img/card-discoverCard.svg';
import jcb from '../../img/card-jcb.png';
import dinersClub from '../../img/card-dinersClub.svg';
import mir from '../../img/card-mir.png';

export default class Cards {
  constructor() {
    this.element = document.createElement('ul');
    this.element.classList.add('cards');
    this.cardImages = [];

    const cardItems = [
      { type: 'visa', src: visa, alt: 'Visa' },
      { type: 'mastercard', src: mastercard, alt: 'MasterCard' },
      { type: 'americanexpress', src: americanExpress, alt: 'AmericanExpress' },
      { type: 'discover', src: discoverCard, alt: 'Discover' },
      { type: 'jcb', src: jcb, alt: 'JCB' },
      { type: 'dinersclub', src: dinersClub, alt: 'DinersClub' },
      { type: 'mir', src: mir, alt: 'MIR' },
    ];

    cardItems.forEach((cardItem) => {
      const item = document.createElement('li');
      item.classList.add('cards__item');

      const image = document.createElement('img');
      image.classList.add('cards__img', cardItem.type);
      image.src = cardItem.src;
      image.alt = cardItem.alt;

      this.cardImages.push(image);

      item.append(image);

      this.element.append(item);
    });
  }

  activateCards() {
    this.cardImages.forEach((image) => image.classList.remove('has-opacity'));
  }

  deActivateCards(cardType) {
    this.cardImages.forEach((image) => {
      if (!image.classList.contains(cardType.toLowerCase())) {
        image.classList.add('has-opacity');
      }
    });
  }
}