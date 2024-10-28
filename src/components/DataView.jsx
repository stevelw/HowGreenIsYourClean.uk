import { useEffect, useState } from "react"
import PostcodeSearch from './PostcodeSearch'
import DayView from './DayView'
import GraphView from './GraphView'

function DataView() {

    const [postcode, setPostcode] = useState('')
    const [dayData, setDayData] = useState({})
    const [graphData, setGraphData] = useState([])

    useEffect(() => {
        setDayData({ // Example data
            "max": 390,
            "average": 262,
            "min": 142,
            "index": "moderate"
        })
        setGraphData([ // Example data
            {
                "from": "2017-10-01T11:30Z",
                "to": "2017-10-01T12:00Z",
                "intensity": {
                    "forecast": 145,
                    "actual": 143,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T12:00Z",
                "to": "2017-10-01T12:30Z",
                "intensity": {
                    "forecast": 151,
                    "actual": 140,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T12:30Z",
                "to": "2017-10-01T13:00Z",
                "intensity": {
                    "forecast": 151,
                    "actual": 140,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T13:00Z",
                "to": "2017-10-01T13:30Z",
                "intensity": {
                    "forecast": 159,
                    "actual": 140,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T13:30Z",
                "to": "2017-10-01T14:00Z",
                "intensity": {
                    "forecast": 160,
                    "actual": 143,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T14:00Z",
                "to": "2017-10-01T14:30Z",
                "intensity": {
                    "forecast": 156,
                    "actual": 145,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T14:30Z",
                "to": "2017-10-01T15:00Z",
                "intensity": {
                    "forecast": 160,
                    "actual": 145,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T15:00Z",
                "to": "2017-10-01T15:30Z",
                "intensity": {
                    "forecast": 169,
                    "actual": 152,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T15:30Z",
                "to": "2017-10-01T16:00Z",
                "intensity": {
                    "forecast": 178,
                    "actual": 156,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T16:00Z",
                "to": "2017-10-01T16:30Z",
                "intensity": {
                    "forecast": 185,
                    "actual": 161,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T16:30Z",
                "to": "2017-10-01T17:00Z",
                "intensity": {
                    "forecast": 193,
                    "actual": 165,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T17:00Z",
                "to": "2017-10-01T17:30Z",
                "intensity": {
                    "forecast": 197,
                    "actual": 168,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T17:30Z",
                "to": "2017-10-01T18:00Z",
                "intensity": {
                    "forecast": 200,
                    "actual": 170,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T18:00Z",
                "to": "2017-10-01T18:30Z",
                "intensity": {
                    "forecast": 188,
                    "actual": 168,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T18:30Z",
                "to": "2017-10-01T19:00Z",
                "intensity": {
                    "forecast": 187,
                    "actual": 161,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T19:00Z",
                "to": "2017-10-01T19:30Z",
                "intensity": {
                    "forecast": 182,
                    "actual": 156,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T19:30Z",
                "to": "2017-10-01T20:00Z",
                "intensity": {
                    "forecast": 173,
                    "actual": 147,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T20:00Z",
                "to": "2017-10-01T20:30Z",
                "intensity": {
                    "forecast": 174,
                    "actual": 143,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T20:30Z",
                "to": "2017-10-01T21:00Z",
                "intensity": {
                    "forecast": 170,
                    "actual": 130,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T21:00Z",
                "to": "2017-10-01T21:30Z",
                "intensity": {
                    "forecast": 149,
                    "actual": 132,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T21:30Z",
                "to": "2017-10-01T22:00Z",
                "intensity": {
                    "forecast": 150,
                    "actual": 121,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-01T22:00Z",
                "to": "2017-10-01T22:30Z",
                "intensity": {
                    "forecast": 143,
                    "actual": 97,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-01T22:30Z",
                "to": "2017-10-01T23:00Z",
                "intensity": {
                    "forecast": 123,
                    "actual": 92,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-01T23:00Z",
                "to": "2017-10-01T23:30Z",
                "intensity": {
                    "forecast": 117,
                    "actual": 81,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-01T23:30Z",
                "to": "2017-10-02T00:00Z",
                "intensity": {
                    "forecast": 118,
                    "actual": 73,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-02T00:00Z",
                "to": "2017-10-02T00:30Z",
                "intensity": {
                    "forecast": 128,
                    "actual": 84,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-02T00:30Z",
                "to": "2017-10-02T01:00Z",
                "intensity": {
                    "forecast": 127,
                    "actual": 89,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-02T01:00Z",
                "to": "2017-10-02T01:30Z",
                "intensity": {
                    "forecast": 122,
                    "actual": 89,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-02T01:30Z",
                "to": "2017-10-02T02:00Z",
                "intensity": {
                    "forecast": 112,
                    "actual": 88,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-02T02:00Z",
                "to": "2017-10-02T02:30Z",
                "intensity": {
                    "forecast": 111,
                    "actual": 93,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-02T02:30Z",
                "to": "2017-10-02T03:00Z",
                "intensity": {
                    "forecast": 112,
                    "actual": 91,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-02T03:00Z",
                "to": "2017-10-02T03:30Z",
                "intensity": {
                    "forecast": 103,
                    "actual": 94,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-02T03:30Z",
                "to": "2017-10-02T04:00Z",
                "intensity": {
                    "forecast": 106,
                    "actual": 96,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-02T04:00Z",
                "to": "2017-10-02T04:30Z",
                "intensity": {
                    "forecast": 101,
                    "actual": 111,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T04:30Z",
                "to": "2017-10-02T05:00Z",
                "intensity": {
                    "forecast": 100,
                    "actual": 125,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T05:00Z",
                "to": "2017-10-02T05:30Z",
                "intensity": {
                    "forecast": 97,
                    "actual": 149,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T05:30Z",
                "to": "2017-10-02T06:00Z",
                "intensity": {
                    "forecast": 124,
                    "actual": 166,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T06:00Z",
                "to": "2017-10-02T06:30Z",
                "intensity": {
                    "forecast": 192,
                    "actual": 193,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T06:30Z",
                "to": "2017-10-02T07:00Z",
                "intensity": {
                    "forecast": 211,
                    "actual": 201,
                    "index": "moderate"
                }
            },
            {
                "from": "2017-10-02T07:00Z",
                "to": "2017-10-02T07:30Z",
                "intensity": {
                    "forecast": 220,
                    "actual": 197,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T07:30Z",
                "to": "2017-10-02T08:00Z",
                "intensity": {
                    "forecast": 215,
                    "actual": 190,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T08:00Z",
                "to": "2017-10-02T08:30Z",
                "intensity": {
                    "forecast": 203,
                    "actual": 190,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T08:30Z",
                "to": "2017-10-02T09:00Z",
                "intensity": {
                    "forecast": 198,
                    "actual": 183,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T09:00Z",
                "to": "2017-10-02T09:30Z",
                "intensity": {
                    "forecast": 157,
                    "actual": 181,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T09:30Z",
                "to": "2017-10-02T10:00Z",
                "intensity": {
                    "forecast": 149,
                    "actual": 178,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T10:00Z",
                "to": "2017-10-02T10:30Z",
                "intensity": {
                    "forecast": 139,
                    "actual": 177,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T10:30Z",
                "to": "2017-10-02T11:00Z",
                "intensity": {
                    "forecast": 134,
                    "actual": 176,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T11:00Z",
                "to": "2017-10-02T11:30Z",
                "intensity": {
                    "forecast": 157,
                    "actual": 181,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T11:30Z",
                "to": "2017-10-02T12:00Z",
                "intensity": {
                    "forecast": 155,
                    "actual": 184,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T12:00Z",
                "to": "2017-10-02T12:30Z",
                "intensity": {
                    "forecast": 160,
                    "actual": 184,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T12:30Z",
                "to": "2017-10-02T13:00Z",
                "intensity": {
                    "forecast": 161,
                    "actual": 188,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T13:00Z",
                "to": "2017-10-02T13:30Z",
                "intensity": {
                    "forecast": 168,
                    "actual": 192,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T13:30Z",
                "to": "2017-10-02T14:00Z",
                "intensity": {
                    "forecast": 170,
                    "actual": 196,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T14:00Z",
                "to": "2017-10-02T14:30Z",
                "intensity": {
                    "forecast": 166,
                    "actual": 196,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T14:30Z",
                "to": "2017-10-02T15:00Z",
                "intensity": {
                    "forecast": 170,
                    "actual": 206,
                    "index": "moderate"
                }
            },
            {
                "from": "2017-10-02T15:00Z",
                "to": "2017-10-02T15:30Z",
                "intensity": {
                    "forecast": 179,
                    "actual": 199,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T15:30Z",
                "to": "2017-10-02T16:00Z",
                "intensity": {
                    "forecast": 189,
                    "actual": 205,
                    "index": "moderate"
                }
            },
            {
                "from": "2017-10-02T16:00Z",
                "to": "2017-10-02T16:30Z",
                "intensity": {
                    "forecast": 205,
                    "actual": 210,
                    "index": "moderate"
                }
            },
            {
                "from": "2017-10-02T16:30Z",
                "to": "2017-10-02T17:00Z",
                "intensity": {
                    "forecast": 216,
                    "actual": 212,
                    "index": "moderate"
                }
            },
            {
                "from": "2017-10-02T17:00Z",
                "to": "2017-10-02T17:30Z",
                "intensity": {
                    "forecast": 219,
                    "actual": 208,
                    "index": "moderate"
                }
            },
            {
                "from": "2017-10-02T17:30Z",
                "to": "2017-10-02T18:00Z",
                "intensity": {
                    "forecast": 230,
                    "actual": 212,
                    "index": "moderate"
                }
            },
            {
                "from": "2017-10-02T18:00Z",
                "to": "2017-10-02T18:30Z",
                "intensity": {
                    "forecast": 222,
                    "actual": 212,
                    "index": "moderate"
                }
            },
            {
                "from": "2017-10-02T18:30Z",
                "to": "2017-10-02T19:00Z",
                "intensity": {
                    "forecast": 229,
                    "actual": 205,
                    "index": "moderate"
                }
            },
            {
                "from": "2017-10-02T19:00Z",
                "to": "2017-10-02T19:30Z",
                "intensity": {
                    "forecast": 210,
                    "actual": 202,
                    "index": "moderate"
                }
            },
            {
                "from": "2017-10-02T19:30Z",
                "to": "2017-10-02T20:00Z",
                "intensity": {
                    "forecast": 201,
                    "actual": 194,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T20:00Z",
                "to": "2017-10-02T20:30Z",
                "intensity": {
                    "forecast": 184,
                    "actual": 188,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T20:30Z",
                "to": "2017-10-02T21:00Z",
                "intensity": {
                    "forecast": 174,
                    "actual": 180,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T21:00Z",
                "to": "2017-10-02T21:30Z",
                "intensity": {
                    "forecast": 161,
                    "actual": 181,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T21:30Z",
                "to": "2017-10-02T22:00Z",
                "intensity": {
                    "forecast": 147,
                    "actual": 160,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T22:00Z",
                "to": "2017-10-02T22:30Z",
                "intensity": {
                    "forecast": 141,
                    "actual": 115,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T22:30Z",
                "to": "2017-10-02T23:00Z",
                "intensity": {
                    "forecast": 120,
                    "actual": 104,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-02T23:00Z",
                "to": "2017-10-02T23:30Z",
                "intensity": {
                    "forecast": 115,
                    "actual": 96,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-02T23:30Z",
                "to": "2017-10-03T00:00Z",
                "intensity": {
                    "forecast": 103,
                    "actual": 93,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-03T00:00Z",
                "to": "2017-10-03T00:30Z",
                "intensity": {
                    "forecast": 88,
                    "actual": 92,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-03T00:30Z",
                "to": "2017-10-03T01:00Z",
                "intensity": {
                    "forecast": 92,
                    "actual": 95,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-03T01:00Z",
                "to": "2017-10-03T01:30Z",
                "intensity": {
                    "forecast": 76,
                    "actual": 88,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-03T01:30Z",
                "to": "2017-10-03T02:00Z",
                "intensity": {
                    "forecast": 73,
                    "actual": 84,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-03T02:00Z",
                "to": "2017-10-03T02:30Z",
                "intensity": {
                    "forecast": 84,
                    "actual": 94,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-03T02:30Z",
                "to": "2017-10-03T03:00Z",
                "intensity": {
                    "forecast": 84,
                    "actual": 95,
                    "index": "very low"
                }
            },
            {
                "from": "2017-10-03T03:00Z",
                "to": "2017-10-03T03:30Z",
                "intensity": {
                    "forecast": 100,
                    "actual": 102,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-03T03:30Z",
                "to": "2017-10-03T04:00Z",
                "intensity": {
                    "forecast": 105,
                    "actual": 104,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-03T04:00Z",
                "to": "2017-10-03T04:30Z",
                "intensity": {
                    "forecast": 113,
                    "actual": 108,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-03T04:30Z",
                "to": "2017-10-03T05:00Z",
                "intensity": {
                    "forecast": 125,
                    "actual": 120,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-03T05:00Z",
                "to": "2017-10-03T05:30Z",
                "intensity": {
                    "forecast": 121,
                    "actual": 155,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-03T05:30Z",
                "to": "2017-10-03T06:00Z",
                "intensity": {
                    "forecast": 144,
                    "actual": 177,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-03T06:00Z",
                "to": "2017-10-03T06:30Z",
                "intensity": {
                    "forecast": 166,
                    "actual": 202,
                    "index": "moderate"
                }
            },
            {
                "from": "2017-10-03T06:30Z",
                "to": "2017-10-03T07:00Z",
                "intensity": {
                    "forecast": 185,
                    "actual": 208,
                    "index": "moderate"
                }
            },
            {
                "from": "2017-10-03T07:00Z",
                "to": "2017-10-03T07:30Z",
                "intensity": {
                    "forecast": 205,
                    "actual": 202,
                    "index": "moderate"
                }
            },
            {
                "from": "2017-10-03T07:30Z",
                "to": "2017-10-03T08:00Z",
                "intensity": {
                    "forecast": 199,
                    "actual": 196,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-03T08:00Z",
                "to": "2017-10-03T08:30Z",
                "intensity": {
                    "forecast": 209,
                    "actual": 194,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-03T08:30Z",
                "to": "2017-10-03T09:00Z",
                "intensity": {
                    "forecast": 207,
                    "actual": 187,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-03T09:00Z",
                "to": "2017-10-03T09:30Z",
                "intensity": {
                    "forecast": 186,
                    "actual": 187,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-03T09:30Z",
                "to": "2017-10-03T10:00Z",
                "intensity": {
                    "forecast": 181,
                    "actual": 183,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-03T10:00Z",
                "to": "2017-10-03T10:30Z",
                "intensity": {
                    "forecast": 154,
                    "actual": 186,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-03T10:30Z",
                "to": "2017-10-03T11:00Z",
                "intensity": {
                    "forecast": 154,
                    "actual": 184,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-03T11:00Z",
                "to": "2017-10-03T11:30Z",
                "intensity": {
                    "forecast": 157,
                    "actual": 184,
                    "index": "low"
                }
            },
            {
                "from": "2017-10-03T11:30Z",
                "to": "2017-10-03T12:00Z",
                "intensity": {
                    "forecast": 161,
                    "actual": 190,
                    "index": "low"
                }
            }
        ])
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
