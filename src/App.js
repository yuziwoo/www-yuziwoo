import { useNavigate } from 'react-router-dom';

import './App.css';

import Header from './components/layout/Header/Header';
import Main from './components/layout/Main/Main';
import Footer from './components/layout/Footer/Footer';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header navigate={navigate} />
      <Main navigate={navigate} />
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
