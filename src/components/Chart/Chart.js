import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointsValues)
    return (
        <div className='chart'>
            { props.dataPoints.map((dataPoints) => (
                <ChartBar key={dataPoints.label} value={dataPoints.value} label={dataPoints.label} maxValue={totalMax} />
            ))}
        </div>
    )
}

export default Chart