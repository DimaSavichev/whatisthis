const button = document.getElementById('send');
button.onclick = function () {
    let answer = document.getElementById('answer').value.toLowerCase();
    if (answer === 'бой за печеньки'){
        location='../ninth%20task/ninthTask.html'
    } else {
        alert('Неправильно, но возможно твой ответ верен, но у меня не предусмотрен такой ответ, напиши Диме :)')
    }
};