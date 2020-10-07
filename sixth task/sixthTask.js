const button = document.getElementById('send');
button.onclick = function () {
    let answer = document.getElementById('answer').value.toLowerCase();
    if (answer === 'cartoons and vodka'){
        location='../seventh%20task/seventhTask.html'
    } else {
        alert('Неправильно, но возможно твой ответ верен, но у меня не предусмотрен такой ответ, напиши Диме :)')
    }
};