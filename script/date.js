"use strict";
(function (){
let date = new Date('2022-02-06T19:57:00');

function formatDate(date){
    let dateMs = date.getTime();
    let diff = Date.now() - dateMs;
if (diff < 1000){
    alert("прямо сейчас");
} else if (Math.floor(diff) < 60000){
    alert(`${Math.floor(diff/1000)} секунд назад`);
} else if (diff < 3600000){
    alert(`${Math.floor(diff/60000)} минут назад`);
} else {
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timezone: 'UTC'
    };
    alert(date.toLocaleString("ru", options));
}
}
formatDate(date);
})();