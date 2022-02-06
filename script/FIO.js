"use strict";
(function () {
    let input = prompt('Введите фамилию, имя и отчество');
    let inputClear = input.trim();
    let inputLow = inputClear.toLowerCase();
    let inputArr = inputLow.split(" ");
    let lastName = inputArr[0];
    let firstName = inputArr[1];
    let patronymic = inputArr[2];
    document.querySelector("#lastName").value = lastName[0].toUpperCase() + lastName.substring(1);
    document.querySelector("#firstName").value = firstName[0].toUpperCase() + firstName.substring(1);
    document.querySelector("#patronymic").value = patronymic[0].toUpperCase() + patronymic.substring(1);
})();