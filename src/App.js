import Header from './components/layout/Header/Header';
import Main from './components/layout/Main/Main';
import Footer from './components/layout/Footer/Footer';
import Aside from './components/layout/Aside/Aside';
import './common.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
