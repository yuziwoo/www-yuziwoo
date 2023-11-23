import { useNavigate } from 'react-router-dom';

import './common.css';

import Header from './components/layout/Header/Header';
import Main from './components/layout/Main/Main';
import Footer from './components/layout/Footer/Footer';
import Aside from './components/layout/Aside/Aside';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header navigate={navigate} />
      <Main navigate={navigate} />
      <Aside />
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
