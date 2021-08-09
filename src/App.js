import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import OverviewCardList from "./components/OverviewCardList/OverviewCardList";
import TotalsCardList from "./components/TotalsCardList/TotalsCardList";

function App() {
  return (
    <div className="App app-animate">
      <Header />
      <main className="main">
        <TotalsCardList />
        <div className="section">
          <h2 className="section__title">Overview - Today</h2>
          <OverviewCardList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
