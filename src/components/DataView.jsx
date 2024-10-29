import { useEffect, useState } from "react"
import PostcodeSearch from './PostcodeSearch'
import DayView from './DayView'
import GraphView from './GraphView'
import { fetchNextFortyEightHours, fetchNextFourHours } from "../utils/api"

function DataView() {

    const [postcode, setPostcode] = useState('')
    const [dayData, setDayData] = useState({})
    const [graphData, setGraphData] = useState([])

    useEffect(() => {
        setDayData(fetchNextFourHours)
        setGraphData(fetchNextFortyEightHours)
    }, [])

    return (
        <>
            <PostcodeSearch postcode={postcode} setPostcode={setPostcode} />
            <DayView dayData={dayData} />
            <GraphView graphData={graphData} />
        </>
    )
}

export default DataView
