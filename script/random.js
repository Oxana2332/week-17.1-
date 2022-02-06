"use strict";
(function () {
    function getRandom() {
        return Math.floor(Math.random() * (10 - -10 + 1) + -10);
    };

    let numbers = []; 

    for (let i = 0; i < 10; i++) { 
        numbers.push(getRandom());
    }

    function getMinOf(numbers) { 
        return Math.min.apply(null, numbers);
    }

    function getMaxOf(numbers) { 
        return Math.max.apply(null, numbers);
    }

    function getSum() { 
        let summa = Number();
        for (let number of numbers) {
            summa += Number(number);
        }
        return summa;
    }

    function getAverage(){
        return getSum() / 10; 
    }                   

    function getMultiply() { 
        let mul = 1;
        for (var i = 0; i < numbers.length; i++) {
            mul = mul * numbers[i];
        }
        return mul;
    }

    numbers.join();

    function onBtnClick() {
    alert(`Сгенерировали: ${numbers};
Минимальное: ${getMinOf(numbers)};
Максимальное: ${getMaxOf(numbers)};
Среднее арифметическое: ${getAverage()};
Сумма чисел: ${getSum()};
Произведение чисел: ${getMultiply()}`);
    }
    
    document.querySelector(".button").addEventListener('click', onBtnClick);
})()