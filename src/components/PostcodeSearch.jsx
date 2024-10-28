import { valueOrDefault } from "chart.js/helpers"
import { useEffect, useState } from "react"

function PostcodeSearch({ postcode, setPostcode }) {
    const [input, setInput] = useState('')

    useEffect(() => {
        const regex = /^[a-z]{1,2}[0-9]{1,2}\s?[0-9][a-z]{2}$/i
        if (input.match(regex)) {
            setPostcode(input)
        } else {
            setPostcode('')
        }
    }, [input])

    return (
        <form>
            <label>Postcode: <input type="text" id="postcode" value={input} onChange={(event) => setInput(event.target.value)}></input></label>
        </form>
    )
}

export default PostcodeSearch
