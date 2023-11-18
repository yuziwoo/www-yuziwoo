import { useEffect } from 'react';

import { CONTENT } from '../../../constants/content';
import { visitedURL } from '../../../utils/sessionStorage';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Content from '../Content/Content';
import Home from '../Home/Home';

const Main = () => {
  useEffect(() => {
    visitedURL.setURLs();
  });

  return (
    <main className={CONTENT.className.main}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/content/:id' element={<Content />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </main>
  );
};

export default Main;
