import "./App.css";
import MainComponent from "./components/CustomInput";

const data = {
  buyAbove: 21025,
  sellBelow: 20988.77,
  buyTarget: [21050.74, 21087.01, 21123.32, 21159.66, 21196.04],
  sellTarget: [20963.04, 20926.85, 20890.69, 20854.56, 20818.46],
  resistance: [21061.27, 21097.56, 21133.89, 21170.25, 21206.64],
  support: [20952.56, 20916.39, 20880.25, 20844.14, 20808.06],
};

function App() {
  return (
    <div className="App">
      <MainComponent data={data} />
    </div>
  );
}

export default App;
