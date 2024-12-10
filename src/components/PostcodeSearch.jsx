import { valueOrDefault } from "chart.js/helpers";
import { useEffect, useState } from "react";

function PostcodeSearch({ postcodeArea, setPostcodeArea }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const regex = /^[a-z]{1,2}[0-9]{1,2}$/i;
    if (input.match(regex)) {
      setPostcodeArea(input);
    } else {
      setPostcodeArea("");
    }
  }, [input]);

  return (
    <form className="flex flex-col justify-evenly text-center align-middle">
      <label htmlFor="postcode" className="m-5 text-xl">
        Area postcode (e.g. 'SE25'):
      </label>
      <input
        type="text"
        id="postcode"
        className="m-5 text-xl w-20 bg-green-500 text-white p-5 rounded-2xl border-none"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
    </form>
  );
}

export default PostcodeSearch;
