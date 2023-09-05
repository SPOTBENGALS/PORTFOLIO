import Header from "./Component/Header";
import Main from "./Component/Main";
import InfoBar from "./Component/InfoBar";
import Project from "./Component/Project";
import History from "./Component/History";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import "./App.css";

function App() {
  return (
    <div className="App w-screen">
      <div className="flex flex-col">
        <Header />
        <Main />
      </div>
      <div className="flex flex-col bg-black">
        <InfoBar />
      </div>
      <div className="flex flex-col bg-white">
        <Project />
      </div>
      <div className="flex flex-col bg-slate-200">
        <History />
      </div>
      <div className="flex flex-col bg-slate-500">
        <Contact />
      </div>
      <div className="flex flex-col bg-gray-950">
        <Footer />
      </div>
    </div>
  );
}

export default App;
