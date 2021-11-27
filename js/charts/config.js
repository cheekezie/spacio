export const chartOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maxBarThickness: 25,
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        color: '#888888',
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
        tickColor: 'red',
      },
      ticks: {
        color: '#888888',
        stepSize: 250,
      },
    },
  },
};
export const dataBgSet = [
  'rgba(27, 117, 188, 0.35)',
  'rgba(27, 117, 188, 0.35)',
  'rgba(27, 117, 188, 0.35)',
  'rgba(27, 117, 188, 0.35)',
  'rgba(27, 117, 188, 0.35)',
  '#1B75BC',
];
