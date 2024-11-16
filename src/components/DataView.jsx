import { useState } from "react"
import PostcodeSearch from './PostcodeSearch'
import DayView from './DayView'
import GraphView from './GraphView'

function DataView() {

    const [postcodeArea, setPostcodeArea] = useState('')

    return (
      <>
      <div className="container">
        <div style={{ flex: "auto" }}>
          <PostcodeSearch
            postcodeArea={postcodeArea}
            setPostcodeArea={setPostcodeArea}
          />
        </div>
        <div style={{ flex: "auto" }}>
          <DayView postcodeArea={postcodeArea} />
        </div>
      </div>
      <GraphView postcodeArea={postcodeArea} />
    </>
    )
}

export default DataView
