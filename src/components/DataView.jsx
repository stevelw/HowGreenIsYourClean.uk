import { useState } from "react"
import PostcodeSearch from './PostcodeSearch'
import DayView from './DayView'
import GraphView from './GraphView'

function DataView() {

    const [postcodeArea, setPostcodeArea] = useState('')

    return (
        <>
            <PostcodeSearch postcodeArea={postcodeArea} setPostcodeArea={setPostcodeArea} />
            <DayView postcodeArea={postcodeArea} />
            <GraphView postcodeArea={postcodeArea} />
        </>
    )
}

export default DataView
