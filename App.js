import MUIButton from "./MUIButton";
import version from "/package.json";
//import "./App.css";
//import Button from "@mui/material/Button";

function App() {
  return (
    <div>
      {<MUIButton />}
      <h2>Helooo</h2>
      <h5>next levelll</h5>
      <div> login component</div>
      <div>cancelled button</div>
      <div></div>
      <p>this is the version {version}</p>
    </div>
  );
}

export default App;
