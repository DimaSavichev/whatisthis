const button = document.getElementById('send');
button.onclick = function () {
    let answer = document.getElementById('answer').value.toLowerCase();
    if (answer === 'японские мультики'){
        location = '../eighth%20task/eighthTask.html'
    } else {
        alert('Неправильно')
    }
};