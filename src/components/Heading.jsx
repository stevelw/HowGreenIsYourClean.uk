import logoPNG from "../assets/logo.png";
import logoWEBP from "../assets/logo.webp";

function Heading() {
  return (
    <header className="flex justify-between m-1 sm:m-7 lg:m-10">
      <a href="#main" className="skip-to-content-link">
        Skip to main content
      </a>
      <picture>
        <source srcSet={logoWEBP} type="image/webp" />
        <source srcSet={logoPNG} type="image/png" />
        <img
          src={logoPNG}
          alt="icon of a grren-energy styled washing machine"
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
        />
      </picture>
      <h1 className="p-0 m-4 text-2xl sm:text-4xl lg:text-6xl xl:text-7xl">
        How <span className="text-green-700">Green</span> Is Your Clean?
      </h1>
    </header>
  );
}

export default Heading;
