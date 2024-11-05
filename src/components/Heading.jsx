import logo from "../assets/logo.png";

function Heading() {
  return (
    <header style={{ gridArea: "header" }}>
      <img
        src={logo}
        alt="icon of a grren-energy styled washing machine"
        width="100"
        height="100"
      />
      <h1>
        How <span className="green">Green</span> Is Your Clean?
      </h1>
    </header>
  );
}

export default Heading;
