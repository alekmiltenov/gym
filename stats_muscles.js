

let labels = ['mucsle','mucsle1','mucsle2','mucsle3','mucsle4']

    let mucsleData = [0,50,88,107,50];

    const data = {
        labels: labels,
        datasets: [{
            data: mucsleData,
            borderColor: 'rgb(68,221,245)',
            fill: true,
            backgroundColor: 'rgb(134, 176, 246)',
            tension: 0.1,
            hoverBorderColor: 'red'
        }]
    };

    const config = {
        type: 'line',
        data: data,
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

    const chart = new Chart(
        document.getElementById('abdominals_chart'),
        config
    );
    const chart1 = new Chart(
        document.getElementById('abdominals_chart'),
        config
    );