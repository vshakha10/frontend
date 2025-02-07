import ListName from "./ListName";
import Card from "./Card";
import "./App.css";

function App() {
  const profile = {
    subject: "javascript",
    time: "8 to 10",
  };

  return (
    <>
      <h1>This is App Components</h1>
      <ListName user={profile} />
      <div className="flex flex-wrap">
        <Card/>
      </div>
    </>
  );
}

export default App;