import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";

function App() {
  const cards = data.map((card) => <Card key={card.key} {...card} />);
  return (
    <div className="min-h-screen min-w-[350px]">
      <Navbar />
      <main className="mx-auto flex max-w-[750px] flex-col items-center">
        {cards}
      </main>
      <Footer />
    </div>
  );
}

export default App;
