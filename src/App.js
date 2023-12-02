import Header from './components/layout/Header/Header';
import Main from './components/layout/Main/Main';
import Footer from './components/layout/Footer/Footer';
import Aside from './components/layout/Aside/Aside';
import './common.css';

import Contenty from './utils/Contenty/Contenty';
import { ContentyProvider } from './utils/Contenty/ContentyContext';
import './utils/Contenty/css/index.css';

const contentyInstance = new Contenty();

const App = () => {
  return (
    <ContentyProvider contentyInstance={contentyInstance}>
      <div className="App">
        <Header />
        <Main />
        <Aside />
        <Footer />
      </div>
    </ContentyProvider>
  );
}

export default App;
