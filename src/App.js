import { useEffect } from "react";

import "./App.css";

import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import Footer from "./components/layout/Footer/Footer";
import { visitedURL } from "./utils/sessionStorage";

function App() {
  useEffect(() => {
    visitedURL.setURLs();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
