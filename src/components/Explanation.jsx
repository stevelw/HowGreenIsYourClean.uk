import H2 from "./styling/H2";

function Explanation() {
  return (
    <div id="explanation" className="m-5 sm:m-20 md:mx-auto max-w-2xl">
      <H2>What is this?</H2>
      <p>
        This is the carbon intensity of the electricity generated for your
        postcode. If more coal is being burned, the number goes up. If more wind
        turbines are spinning, the number goes down. The values are per kWh
        generated, so this isn&apos;t a measure of how much energy is being
        generated, but how clean that energy is.
      </p>
      <p>
        You can use this data to make an informed choice on when to use
        utilities such as washing machines, tumble driers, and dishwashers. The
        values for today cover a forecast for the next 4 hours.
      </p>
      <aside>
        <p>
          Datasource:{" "}
          <a
            href="https://api.carbonintensity.org.uk"
            target="_blank"
            className="text-green-700"
          >
            Official Carbon Intensity API for Great Britain
          </a>{" "}
          developed by <em>National Energy System Operator</em> (<em>NESO</em>).
          You can find out more about carbon intensity at{" "}
          <a
            href="https://carbonintensity.org.uk"
            target="_blank"
            className="text-green-700"
          >
            carbonintensity.org.uk
          </a>
        </p>
        <p>
          Data license:{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            className="text-green-700"
          >
            CC-BY-4.0
          </a>
        </p>
      </aside>
    </div>
  );
}

export default Explanation;
