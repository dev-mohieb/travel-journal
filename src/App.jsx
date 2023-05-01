import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";

function App() {
  const cards = data.map((card) => <Card key={card.key} {...card} />);
  return (
    <div className="min-w-[500px] min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center max-w-[750px] mx-auto">{cards}</main>
      <Footer />
    </div>
  );
}

export default App;
