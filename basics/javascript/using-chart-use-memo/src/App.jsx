
import { useState } from 'react'
import './App.css'
import ChartComponent from './components/chart.component'
import { WeatherData } from './data/data';
function App() {
  const [data, setData] = useState("");
  const showChart = () => {
    setData(WeatherData);
  }
  return (
    <>
      <button onClick={showChart}>Show Weather chart</button>
      <ChartComponent data={data}></ChartComponent>
    </>
  )
}

export default App
/*
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
*/