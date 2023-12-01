// system import
import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// page import
import { HomePage } from '../../../pages/router/lazy';
import HomeSkeleton from '../../../pages/Home/HomeSkeleton';
import About from '../../../pages/About/About';
import Shop from '../../../pages/Shop/Shop';
import Shoplist from '../../../pages/Shop/Shoplist';
import NotFound from '../../../pages/NotFound/NotFound';

// others
import { visitedURL } from '../../../utils/sessionStorage';
import { contents } from '../../../data/content';
import { useContenty } from '../../../utils/Contenty/ContentyContext';

const Main = () => {
  const contentyInstance = useContenty();

  useEffect(() => {
    return (
      () => {
        visitedURL.setURLs();
      }
    )
  });

  return (
    <main id={`${contentyInstance.getContainerId()}`} style={{ minHeight: '100vh', transition: 'background 1.5s', paddingBottom: '120px'}}>
      <Routes>
        <Route path='/' element={
          <Suspense fallback={<HomeSkeleton />}>
            <HomePage contents={contents} />
          </Suspense>
        } />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<Shoplist />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </main>
  );
};

export default Main;
