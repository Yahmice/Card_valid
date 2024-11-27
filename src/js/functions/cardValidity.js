
export default function checkCardValidity(input) {
    let cardType = '';
  
    const slice1 = +input.slice(0, 1);
    const slice2 = +input.slice(0, 2);
    const slice3 = +input.slice(0, 3);
    const slice4 = +input.slice(0, 4);
  
    if (slice4 > 2199 && slice4 < 2205) {
      cardType = 'MIR';
    } else if ((slice4 > 2220 && slice4 < 2721) || (slice2 > 50 && slice2 < 56)) {
      cardType = 'MasterCard';
    } else if (slice2 === 34 || slice2 === 37) {
      cardType = 'AmericanExpress';
    } else if (slice4 > 3527 && slice4 < 3590) {
      cardType = 'JCB';
    } else if ((slice3 > 299 && slice3 < 306) || slice2 === 36 || slice2 === 38 || slice2 === 39) {
      cardType = 'DinersClub';
    } else if (slice1 === 4) {
      cardType = 'Visa';
    } else if (slice4 === 6011 || (slice3 > 643 && slice2 < 66)) {
      cardType = 'Discover';
    }
  
    return cardType;
  }