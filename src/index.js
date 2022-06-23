let firstTen = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
};

let secondTen = {
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
};

let tens = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
};

module.exports = function toReadable (number) {
  if (number < 10) {
    return firstTen[number]; // первый десяток
  } else if (number >= 10 && number < 20) {
    return secondTen[number]; // второй десяток
  } else if (number >= 20 && number < 100 && String(number)[1] === '0') {
    return tens[String(number)[0]]; // десятки
  } else if (number > 20 && number < 100) {
    return tens[String(number)[0]] + ' ' + firstTen[String(number)[1]]; // десятки + числа
  } else if (number >= 100 && String(number)[1] === '0' && String(number)[2] === '0') {
    return firstTen[String(number)[0]] + ' ' + 'hundred'; // сотни
  } else if (number > 100 && String(number)[1] === '0') {
    return firstTen[String(number)[0]] + ' ' + 'hundred' + ' ' + firstTen[String(number)[2]]; // сотни + первый десяток
  } else if (number >= 110 && String(number)[1] === '1') {
    return firstTen[String(number)[0]] + ' ' + 'hundred' + ' ' + secondTen[String(number)[1] + String(number)[2]]; // сотни + второй десяток
  } else if (number >= 120 && String(number)[2] === '0') {
    return firstTen[String(number)[0]] + ' ' + 'hundred' + ' ' + tens[String(number)[1]]; // сотни + десятки
  } else if (number > 120) {
    return firstTen[String(number)[0]] + ' ' + 'hundred' + ' ' + tens[String(number)[1]] + ' ' + firstTen[String(number)[2]]; // сотни + десятки + числа
  }
}
