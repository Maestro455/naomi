$(document).ready(function () {
    $('.knopka').click(function () {
        let array = [];
        let amount = +prompt('Сколько элементов будет в массиве?');
        for (let i = 0; i < amount; i++) {
            let item = prompt('Введите элемент.');
            array.push(item);
        }
        console.log(array);
    });
});
