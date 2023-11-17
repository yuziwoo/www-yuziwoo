import './App.css';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

import { CONTENT } from './constants/api';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className={CONTENT.className.main}></main>
      <Footer></Footer>
    </div>
  );
}

export default App;
