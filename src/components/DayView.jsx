function DayView({ dayData }) {

    return (
        <div id="day-view">
            <h2>The next 4 hours</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Grams of CO<sub>2</sub> released per kilowatt-hour generated</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Average</td>
                        <td>{dayData.average}</td>
                    </tr>
                    <tr>
                        <td>Min – Max</td>
                        <td>{dayData.min} - {dayData.max}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DayView
