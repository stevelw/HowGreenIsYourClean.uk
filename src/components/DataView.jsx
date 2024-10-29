import { useEffect, useState } from "react"
import PostcodeSearch from './PostcodeSearch'
import DayView from './DayView'
import GraphView from './GraphView'
import { fetchNextFortyEightHours, fetchNextFourHours } from "../utils/api"

function DataView() {

    const [postcodeArea, setPostcodeArea] = useState('')
    const [graphData, setGraphData] = useState([])

    useEffect(() => {
        setDayData(fetchNextFourHours)
        setGraphData(fetchNextFortyEightHours)
    }, [])

    return (
        <>
            <PostcodeSearch postcodeArea={postcodeArea} setPostcodeArea={setPostcodeArea} />
            <DayView postcodeArea={postcodeArea} />
            <GraphView graphData={graphData} />
        </>
    )
}

export default DataView
