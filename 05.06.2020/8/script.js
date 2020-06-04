let money = prompt('Сколько денег у тебя в кошельке?');
let price = prompt('Цена шоколадки');
let quantity = Math.floor(money / price);
let balance = Math.floor(money % price);
alert(quantity + ' шоколадок ты сможешь купить. ' + balance + ' рублей у тебя останется.')