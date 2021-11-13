const ctx = document.getElementById('dashboardSummaryChart');
Chart.defaults.font.size = 14;
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
        datasets: [{
            data: [300, 250, 500, 200, 450, 300],
            backgroundColor: [
                'rgba(27, 117, 188, 0.35)',
                'rgba(27, 117, 188, 0.35)',
                'rgba(27, 117, 188, 0.35)',
                'rgba(27, 117, 188, 0.35)',
                'rgba(27, 117, 188, 0.35)',
                '#1B75BC'
            ],
            // borderColor: [
            //     'rgba(27, 117, 188, 0.35)',
            //     'rgba(27, 117, 188, 0.35)',
            //     'rgba(27, 117, 188, 0.35)',
            //     'rgba(27, 117, 188, 0.35)',
            //     'rgba(27, 117, 188, 0.35)',
            //     '#1B75BC'
            // ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        maxBarThickness: 25,
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false
                },
                ticks: {
                    color: '#888888',
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                },
                ticks: {
                    color: '#888888',
                }
            },
        }
    }
});