import "./App.css";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Main from "./components/Main";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <div className="main-container">
        <NavBar />

        <div className="wrapper">
          <Intro />
          <Main />
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
