const button = document.getElementById('send');
button.onclick = function () {
    let answer = document.getElementById('answer').value.toLowerCase();
    if (answer === 'первый луч'){
        location='../final/final.html'
    } else {
        alert('Неправильно, но возможно твой ответ верен, но у меня не предусмотрен такой ответ, напиши Диме :)')
    }
};