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
            <label>Area postcode (e.g. 'RN14'): <input type="text" id="postcode" value={input} onChange={(event) => setInput(event.target.value)}></input></label>
        </form>
    )
}

export default PostcodeSearch
