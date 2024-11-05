import { valueOrDefault } from "chart.js/helpers"
import { useEffect, useState } from "react"

function PostcodeSearch({ postcodeArea, setPostcodeArea }) {
    const [input, setInput] = useState('')

    useEffect(() => {
        const regex = /^[a-z]{1,2}[0-9]{1,2}$/i
        if (input.match(regex)) {
            setPostcodeArea(input)
        } else {
            setPostcodeArea('')
        }
    }, [input])

    return (
        <form>
            <label for='postcode'>Area postcode (e.g. 'SE25'):</label>
            <input type="text" id="postcode" value={input} onChange={(event) => setInput(event.target.value)}></input>
        </form>
    )
}

export default PostcodeSearch
