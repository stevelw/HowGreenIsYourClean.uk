import "./App.css";
import Heading from "./components/Heading";
import DataView from "./components/DataView";
import Explanation from "./components/Explanation";

function App() {
  return (
    <>
      <Heading />
      <main id="main">
        <DataView />
        <Explanation />
      </main>
    </>
  );
}

export default App;
