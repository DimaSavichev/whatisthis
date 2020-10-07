const button = document.getElementById('send');
button.onclick = function () {
    let answer = document.getElementById('answer').value.toLowerCase();
    if ((answer === '300 bucks') || (answer === 'three hundred bucks')){
        location='../third%20task/thirdTask.html'
    } else {
        alert('Неправильно, но возможно твой ответ верен, но у меня не предусмотрен такой ответ, напиши Диме :)')
    }
};