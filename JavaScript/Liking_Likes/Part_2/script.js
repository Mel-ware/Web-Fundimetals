var count = [9,12,9];
var countElement = [document.querySelector("#count1"), document.querySelector("#count2"), document.querySelector("#count3")];


function increaseLikes(user) {
    count[user]++;
    countElement[user].innerText = count[user] + " like(s)";
}