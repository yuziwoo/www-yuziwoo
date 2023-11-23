import { useNavigate } from 'react-router-dom';

import Header from './components/layout/Header/Header';
import Main from './components/layout/Main/Main';
import Footer from './components/layout/Footer/Footer';
import Aside from './components/layout/Aside/Aside';

import './common.css';


function App() {
  const navigate = useNavigate();

  const useNavigater = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <Header navigate={useNavigater} />
      <Main navigate={useNavigater} />
      <Aside />
      <Footer navigate={useNavigater} />
    </div>
  );
}

export default App;
