var flag = 0;
//clearFields function
function clearFields() {
    if(flag === 1) {
        document.getElementById('obliques_input').style.backgroundColor = 'grey';
    } else {
        document.getElementById('obliques_input').style.backgroundColor = 'white';
    }
    if(flag === 2) {
        document.getElementById('forearms_input').style.backgroundColor = 'grey';
    } else {
        document.getElementById('forearms_input').style.backgroundColor = 'white';
    }
    if(flag === 3) {
        document.getElementById('biceps_input').style.backgroundColor = 'grey';
    } else {
        document.getElementById('biceps_input').style.backgroundColor = 'white';
    }
    if(flag === 4) {
        document.getElementById('traps_input').style.backgroundColor = 'grey';
    } else {
        document.getElementById('traps_input').style.backgroundColor = 'white';
    }
    if(flag === 5) {
        document.getElementById('chest_input').style.backgroundColor = 'grey';
    } else {
        document.getElementById('chest_input').style.backgroundColor = 'white';
    }
    if(flag === 6) {
        document.getElementById('quads_input').style.backgroundColor = 'grey';
    } else {
        document.getElementById('quads_input').style.backgroundColor = 'white';
    }
    if(flag === 7) {
        document.getElementById('calves_input').style.backgroundColor = 'grey';
    } else {
        document.getElementById('calves_input').style.backgroundColor = 'white';
    }
    if(flag === 8) {
        document.getElementById('abdominals_input').style.backgroundColor = 'grey';
    } else {
        document.getElementById('abdominals_input').style.backgroundColor = 'white';
    }
}
//obliques functinon

var obliquesEl = document.getElementById('obliques');

function onObliquesClick() {
    flag = 1;
    clearFields();
}

//forearms function

var forearmsEl = document.getElementById('forearms');

function onForearmsClick() {
    flag = 2;
    clearFields();
}

//biceps function

var bicepsEl = document.getElementById('biceps');

function onBicepsClick() {
    flag = 3;
    clearFields();
}

//traps function

var trapsEl = document.getElementById('traps');

function onTrapsClick() {
    flag = 4;
    clearFields();
}


//chest function

var chestEl = document.getElementById('chest');

function onChestClick() {
    flag = 5;
    clearFields();
}


//quads function

var quadsEl = document.getElementById('quads');

function onQuadsClick() {
    flag = 6;
    clearFields();
}

//calves function
 
var calvesEl = document.getElementById('calves');

function onCalvesClick() {
    flag = 7;
    clearFields();
}

var abdominalsEl = document.getElementById('abdominals');

function onAbdominalsClick() {
    flag = 8;
    clearFields();
}


//submit button 

document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submit-btn');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById("dataForm").action = "/stats/new/";
        document.getElementById("dataForm").method = "POST";
    const muscle_data = {};
    if(document.getElementById('abdominals_input').value !== '') {
        muscle_data['abdominals'] = document.getElementById('abdominals_input').value;
    }
    if(document.getElementById('obliques_input').value !== '') {
        muscle_data['obliques'] = document.getElementById('obliques_input').value;
    }
    if(document.getElementById('forearms_input').value !== '') {
        muscle_data['forearms'] = document.getElementById('forearms_input').value;
    }
    if(document.getElementById('biceps_input').value !== '') {
        muscle_data['biceps'] = document.getElementById('biceps_input').value;
    }
    if(document.getElementById('traps_input').value !== '') {
        muscle_data['traps'] = document.getElementById('traps_input').value;
    }
    if(document.getElementById('chest_input').value !== '') {
        muscle_data['chest'] = document.getElementById('chest_input').value;
    }
    if(document.getElementById('quads_input').value !== '') {
        muscle_data['quads'] = document.getElementById('quads_input').value;
    }
    if(document.getElementById('calves_input').value !== '') {
        muscle_data['calves'] = document.getElementById('calves_input').value;
    }
    console.log(muscle_data);
    const dataJson = JSON.stringify(muscle_data);
    document.querySelector('[name="data"]').value = dataJson;
    document.getElementById('dataForm').submit();

});
});