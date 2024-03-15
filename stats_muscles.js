

//abdominals chart

let abdominals_labels = ['mucsle','mucsle1','mucsle2','mucsle3','mucsle4']

    let abdominals_muscleData = [0,50,88,107,50];

    const abdominals_data = {
        labels: abdominals_labels,
        datasets: [{
            data: abdominals_muscleData,
            borderColor: 'rgb(68,221,245)',
            fill: true,
            backgroundColor: 'rgb(134, 176, 246)',
            tension: 0.1,
            hoverBorderColor: 'red'
        }]
    };

    const abdominals_config = {
        type: 'line',
        data: abdominals_data,
        options: {
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Progres'
                }
            }
        }
    };

    const abdominals_chart = new Chart(
        document.getElementById('abdominals_chart'),
        abdominals_config
    );



//obliques chart

let obliques_labels = ['mucsle','mucsle1','mucsle2','mucsle3','mucsle4']

    let obliques_muscleData = [0,51,89,160,20];

    const obliques_data = {
        labels: obliques_labels,
        datasets: [{
            data: obliques_muscleData,
            borderColor: 'rgb(68,221,245)',
            fill: true,
            backgroundColor: 'rgb(134, 176, 246)',
            tension: 0.1,
            hoverBorderColor: 'red'
        }]
    };

    const obliques_config = {
        type: 'line',
        data: obliques_data,
        options: {
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Progres'
                }
            }
        }
    };

    const obliques_chart = new Chart(
        document.getElementById('obliques_chart'),
        obliques_config
    );

    //forearms chart

let forearms_labels = ['mucsle','mucsle1','mucsle2','mucsle3','mucsle4']

let forearms_muscleData = [0,51,89,160,20];

const forearms_data = {
    labels: forearms_labels,
    datasets: [{
        data: forearms_muscleData,
        borderColor: 'rgb(68,221,245)',
        fill: true,
        backgroundColor: 'rgb(134, 176, 246)',
        tension: 0.1,
        hoverBorderColor: 'red'
    }]
};

const forearms_config = {
    type: 'line',
    data: forearms_data,
    options: {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Progres'
            }
        }
    }
};

const forearms_chart = new Chart(
    document.getElementById('forearms_chart'),
    forearms_config
);


//biceps chart

    let biceps_labels = ['mucsle','mucsle1','mucsle2','mucsle3','mucsle4']

    let biceps_muscleData = [0,51,89,160,20];
    
    const biceps_data = {
        labels: biceps_labels,
        datasets: [{
            data: biceps_muscleData,
            borderColor: 'rgb(68,221,245)',
            fill: true,
            backgroundColor: 'rgb(134, 176, 246)',
            tension: 0.1,
            hoverBorderColor: 'red'
        }]
    };
    
    const biceps_config = {
        type: 'line',
        data: biceps_data,
        options: {
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Progres'
                }
            }
        }
    };
    
    const biceps_chart = new Chart(
        document.getElementById('biceps_chart'),
        biceps_config
    );


        //shoulders chart

let shoulders_labels = ['mucsle','mucsle1','mucsle2','mucsle3','mucsle4']

let shoulders_muscleData = [0,51,89,160,20];

const shoulders_data = {
    labels: shoulders_labels,
    datasets: [{
        data: shoulders_muscleData,
        borderColor: 'rgb(68,221,245)',
        fill: true,
        backgroundColor: 'rgb(134, 176, 246)',
        tension: 0.1,
        hoverBorderColor: 'red'
    }]
};

const shoulders_config = {
    type: 'line',
    data: shoulders_data,
    options: {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Progres'
            }
        }
    }
};

const shoulders_chart = new Chart(
    document.getElementById('shoulders_chart'),
    shoulders_config
);


    //traps chart

    let traps_labels = ['mucsle','mucsle1','mucsle2','mucsle3','mucsle4']

    let traps_muscleData = [0,51,89,160,20];
    
    const traps_data = {
        labels: traps_labels,
        datasets: [{
            data: traps_muscleData,
            borderColor: 'rgb(68,221,245)',
            fill: true,
            backgroundColor: 'rgb(134, 176, 246)',
            tension: 0.1,
            hoverBorderColor: 'red'
        }]
    };
    
    const traps_config = {
        type: 'line',
        data: traps_data,
        options: {
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Progres'
                }
            }
        }
    };
    
    const traps_chart = new Chart(
        document.getElementById('traps_chart'),
        traps_config
    );


        //chest chart

let chest_labels = ['mucsle','mucsle1','mucsle2','mucsle3','mucsle4']

let chest_muscleData = [0,51,89,160,20];

const chest_data = {
    labels: chest_labels,
    datasets: [{
        data: chest_muscleData,
        borderColor: 'rgb(68,221,245)',
        fill: true,
        backgroundColor: 'rgb(134, 176, 246)',
        tension: 0.1,
        hoverBorderColor: 'red'
    }]
};

const chest_config = {
    type: 'line',
    data: chest_data,
    options: {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Progres'
            }
        }
    }
};

const chest_chart = new Chart(
    document.getElementById('chest_chart'),
    chest_config
);



    //quads chart

    let quads_labels = ['mucsle','mucsle1','mucsle2','mucsle3','mucsle4']

    let quads_muscleData = [0,51,89,160,20];
    
    const quads_data = {
        labels: quads_labels,
        datasets: [{
            data: quads_muscleData,
            borderColor: 'rgb(68,221,245)',
            fill: true,
            backgroundColor: 'rgb(134, 176, 246)',
            tension: 0.1,
            hoverBorderColor: 'red'
        }]
    };
    
    const quads_config = {
        type: 'line',
        data: quads_data,
        options: {
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Progres'
                }
            }
        }
    };
    
    const quads_chart = new Chart(
        document.getElementById('quads_chart'),
        quads_config
    );


        //calves chart

let calves_labels = ['mucsle','mucsle1','mucsle2','mucsle3','mucsle4']

let calves_muscleData = [0,51,89,160,20];

const calves_data = {
    labels: calves_labels,
    datasets: [{
        data: calves_muscleData,
        borderColor: 'rgb(68,221,245)',
        fill: true,
        backgroundColor: 'rgb(134, 176, 246)',
        tension: 0.1,
        hoverBorderColor: 'red'
    }]
};

const calves_config = {
    type: 'line',
    data: calves_data,
    options: {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Progres'
            }
        }
    }
};

const calves_chart = new Chart(
    document.getElementById('calves_chart'),
    calves_config
);