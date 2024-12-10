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
      <label
        htmlFor="postcode"
        className="m-0 md:mx-4 md:my-0 p-3 sm:p-0 text-xl sm:text-3xl md:text-3xl xl:text-4xl"
      >
        Area postcode (e.g. 'SE25'):
      </label>
      <input
        type="text"
        id="postcode"
        placeholder="SE25"
        className="mx-auto mt-0 sm:mt-3 mb-3 md:my-5 p-3 placeholder-gray-500 text-center text-xl w-20 bg-green-500 text-white rounded-2xl border-none"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
    </form>
  );
}

export default PostcodeSearch;
