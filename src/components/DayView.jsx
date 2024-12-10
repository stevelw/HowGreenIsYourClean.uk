import { useEffect, useState } from "react";
import { fetchNextFourHours } from "../utils/api";
import H2 from "./styling/H2";

function DayView({ postcodeArea }) {
  const [dayData, setDayData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!postcodeArea) {
      setDayData({});
    } else {
      setIsLoading(true);
      fetchNextFourHours(postcodeArea)
        .then((data) => setDayData(data))
        .then(() => setIsLoading(false));
    }
  }, [postcodeArea]);

  return (
    <div
      id="day-view"
      className="border-solid border-green-500 border-2 sm:mt-5 sm:mb-7 mx-4 md:mx-20 lg:mx-32 lg:mb-10 rounded-2xl pt-2 sm:pt-4 pb-4 sm:pb-0"
    >
      <H2>The next 4 hours</H2>
      <p className="text-center my-0 mx-5 sm:my-2 p-0">
        Grams of CO<sub>2</sub> released per kWh used
      </p>
      <table className="mx-auto my-2 sm:mb-5">
        <thead>
          <tr>
            <th></th>
            <th className="hidden">
              Grams of CO<sub>2</sub> released per kWh used
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-bold text-right pr-2">Average:</td>
            <td>{isLoading ? "Loading..." : dayData.average}</td>
          </tr>
          <tr>
            <td className="font-bold text-right pr-2">Min &ndash; Max:</td>
            <td>
              {isLoading || !Object.keys(dayData).length
                ? ""
                : `${dayData.min} - ${dayData.max}`}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DayView;
