let number = prompt('Введи трехзначное число');
let firstNum = Math.floor(number / 100);
let thirdNum = Math.floor(number % 10);
let secondNum = ((Math.floor(number % 100)) - thirdNum) / 10;
let final = String(thirdNum) + String(secondNum) + String(firstNum);
alert(final);