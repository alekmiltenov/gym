var flag = 0;
//clear function

function clear() {
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
    clear();
}

//forearms function

var forearmsEl = document.getElementById('forearms');

function onForearmsClick() {
    flag = 2;
    clear();
}

//biceps function

var bicepsEl = document.getElementById('biceps');

function onBicepsClick() {
    flag = 3;
    clear();
}

//traps function

var trapsEl = document.getElementById('traps');

function onTrapsClick() {
    flag = 4;
    clear();
}


//chest function

var chestEl = document.getElementById('chest');

function onChestClick() {
    flag = 5;
    clear();
}


//quads function

var quadsEl = document.getElementById('quads');

function onQuadsClick() {
    flag = 6;
    clear();
}

//calves function
 
var calvesEl = document.getElementById('calves');

function onCalvesClick() {
    flag = 7;
    clear();
}

var abdominalsEl = document.getElementById('abdominals');

function onAbdominalsClick() {
    flag = 8;
    clear();
}
