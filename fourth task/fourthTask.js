const button = document.getElementById('send');
button.onclick = function () {
    let answer = document.getElementById('answer').value.toLowerCase();
    if (answer === 'хоп хей ла ла лей'){
        location='../fifth%20task/fifthTask.html'
    } else {
        alert('Неправильно, но возможно твой ответ верен, но у меня не предусмотрен такой ответ, напиши Диме :)')
    }
};