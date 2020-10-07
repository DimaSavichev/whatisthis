const button = document.getElementById('send');
button.onclick = function () {
    let answer = document.getElementById('answer').value.toLowerCase();
    if (answer === 'белая комната'){
        location = '../sixth%20task/sixthTask.html'
    } else {
        alert('Неправильно')
    }
};