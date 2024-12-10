import { useEffect, useState } from "react";
import { fetchNextFourHours } from "../utils/api";
import H2 from "./styling/H2";
import TH from "./styling/TH";
import TD from "./styling/TD";

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
    <div id="day-view">
      <H2>The next 4 hours</H2>
      <table>
        <thead>
          <tr>
            <TH />
            <TH>
              Grams of CO<sub>2</sub> released per kilowatt-hour generated
            </TH>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TD>Average</TD>
            <TD>{isLoading ? "Loading..." : dayData.average}</TD>
          </tr>
          <tr>
            <TD>Min &ndash; Max</TD>
            <TD>
              {isLoading || !Object.keys(dayData).length
                ? ""
                : `${dayData.min} - ${dayData.max}`}
            </TD>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DayView;
