/* eslint-disable react/prop-types */
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, registerables } from 'chart.js';

ChartJS.register(...registerables);

const CoinChart = ({coin}) => {
    const prices = coin.sparkline_in_7d.price

    const startPrice = prices[0]
    const endPrice = prices[prices.length - 1]
    
    const data =  {
        labels: prices.map((_, index) => index),
        datasets: [
            {
                label: coin.name,
                data: prices,
                fill: false,
                backgroundColor: startPrice < endPrice ? 'green' : 'red',
                borderColor: startPrice < endPrice ? 'green' : 'red',
                borderWidth: 1,
                pointRadius: 0,
            }
        ]
    }
    
    const options = {
        maintainAspectRatio: true,
        aspectRatio: 27 / 10,
        scales: {
            x: {
                display: false, // No X axis labels
            },
            y: {
                display: false, // No Y axis labels
            },
        },
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
        },
    };
    return (
        <div style={{height: 50, width: 'auto', position: 'relative'}}>
            <Line data={data} options={options}/>
        </div>
    )
}

export default CoinChart