const button = document.getElementById('send');
button.onclick = function () {
    let answer = document.getElementById('answer').value.toLowerCase();
    if (answer === 'чезавсеволодзахряпинянепонял'){
        location = '../sixth%20task/sixthTask.html'
    } else {
        alert('Ну, ты пытался. Скорее всего ты опечатался, так что напиши Диме :)')
    }
};