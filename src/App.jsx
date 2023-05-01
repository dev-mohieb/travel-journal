import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((card) => <Card key={card.key} {...card} />);
  return (
    <div className="min-w-[500px]">
      <Navbar />
      <main className="flex flex-col items-center">{cards}</main>
    </div>
  );
}

export default App;
