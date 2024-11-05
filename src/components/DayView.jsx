import { useEffect, useState } from "react";
import { fetchNextFourHours } from "../utils/api";

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
    <div id="day-view" style={{ gridArea: "four-hours" }}>
      <h2>The next 4 hours</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>
              Grams of CO<sub>2</sub> released per kilowatt-hour generated
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Average</td>
            <td>{isLoading ? "Loading..." : dayData.average}</td>
          </tr>
          <tr>
            <td>Min &ndash; Max</td>
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
