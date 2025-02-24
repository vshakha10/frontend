import "./App.css";
import ComA from "./Component/ComA";
import ComB from "./Component/ComB";
import { createContext } from "react";

/* createContext , Provider , Consumer */

export const element = createContext();

function App() {
  const item = "ReactJS";

  return(
  <>
    <div className="container mx-auto">
        <h1 className="heading">This is App Components</h1>
        <div className="flex justify-evenly">
          <ComA />
          <element.Provider value={item}>
            <ComB />
          </element.Provider>
        </div>
      </div>
  </>
  );
}

export default App;
