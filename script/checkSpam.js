"use strict";
(function () {
    let comments = [];

    function onBtnClick() {
        let text = document.querySelector("#newComments").value;
        comments.push(text);
        checkSpam(comments);
    }

    function checkSpam(comments) {
        let optionsString = "";
        for (let comment of comments) {
            let clearComment = comment.replace(/ххх|xxx|viagra/gi, "***")
            optionsString += `<div>${clearComment}<hr></div>`;
        }
        document.querySelector("#container").innerHTML = optionsString;
    }

    document.querySelector('.button').addEventListener('click', onBtnClick);
})()