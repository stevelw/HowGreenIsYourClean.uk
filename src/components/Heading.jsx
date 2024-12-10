import logo from "../assets/logo.png";

function Heading() {
  return (
    <header className="flex justify-between">
      <img
        src={logo}
        alt="icon of a grren-energy styled washing machine"
        width="100"
        height="100"
      />
      <h1 className="px-10 py-0 m-0">
        How <span className="text-green-500">Green</span> Is Your Clean?
      </h1>
    </header>
  );
}

export default Heading;
