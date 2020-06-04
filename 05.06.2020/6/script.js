let dollar = prompt('Введи сумму в долларах');
const coef = 1.1;
let euro = Math.floor((dollar / coef) * 100) / 100;
alert('Сумма составит: ' + euro + ' евро');