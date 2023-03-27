import CurrencyConverter from "./components/CurrencyConverter";
import Footer from "./components/Footer";
import NewsFeed from "./components/NewsFeed";


function App() {
  return (
    <div className="app">
      <h1>Crypto Dasboard</h1>
      <div className="app-wrapper">
        <CurrencyConverter/>
        <NewsFeed/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
