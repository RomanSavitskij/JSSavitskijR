let giga = prompt('Введи объем флешки в Гб');
const megaInGiga = 1024;
const file = 820;
let quantity = Math.floor((giga * megaInGiga) / file);
alert(quantity + ' файлов поместится на твоей флешке')