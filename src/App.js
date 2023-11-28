import Header from './components/layout/Header/Header';
import Main from './components/layout/Main/Main';
import Footer from './components/layout/Footer/Footer';
import Aside from './components/layout/Aside/Aside';
import Mouse from './components/layout/Mouse/Mouse';
import './common.css';

import Contenty from './utils/Contenty/Contenty';
import { ContentyProvider } from './utils/Contenty/ContentyContext';

const contentyInstance = new Contenty();

function App() {
  return (
    <ContentyProvider contentyInstance={contentyInstance}>
      <div className="App">
        <Header />
        <Main />
        <Aside />
        <Footer />
        <Mouse />
      </div>
    </ContentyProvider>
  );
}

export default App;
