export default function luhnAlgorithm(input) {
    const parity = input.length % 2;
    let sum = 0;
  
    for (let i = 0; i < input.length; i += 1) {
      let digit = +input[i];
      if (i % 2 === parity) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
  
    return sum % 10 === 0;
  }