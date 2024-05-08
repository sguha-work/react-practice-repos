import { useEffect, useMemo, useRef } from "react"
import "./chart.component.css";
// function ChartComponent(props) {
function ChartComponent({ data }) {
    const chartCanvasDOM = useRef(null);
    const chartRef = useRef(null);
    const prepareChartData = useMemo(() => {
        console.log("data", data);
        let chartData = {
            type: 'bar',
            data: {
                labels: [],
                datasets: []
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
        Array.isArray(data) && data.forEach((d) => {
            chartData.data.labels.push(d.date);
            chartData.data.datasets.push({
                label: "#",
                data: [d.temperatureF],
                borderWidth: 1
            });
        })
        return chartData;
    }, [data]);
    useEffect(() => {// this section will be called as soon as the "data" variable's value changed
        const ctx = chartCanvasDOM.current;
        if (chartRef.current != null) {
            chartRef.current.destroy();
        }
        chartRef.current = new Chart(ctx, prepareChartData);
    }, [data])
    return (
        <div className="chartContainer">
            <canvas ref={chartCanvasDOM}></canvas>
        </div>
    )
}

export default ChartComponent