
import "./App.css";
import Card from "./components/Card";
import { Images, Button } from "./components/Card";


function App() {
  return (
    <div className="App">
      <Card>
        <Images />
        <Button />
      </Card>
    </div>
  );
}

export default App;
