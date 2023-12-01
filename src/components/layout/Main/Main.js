import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../../../pages/router/lazy';
import About from '../../../pages/About/About';
import Shop from '../../../pages/Shop/Shop';
import Shoplist from '../../../pages/Shop/Shoplist';
import NotFound from '../../../pages/NotFound/NotFound';

import { visitedURL } from '../../../utils/sessionStorage';
import { contents } from '../../../data/content';
import { useContenty } from '../../../utils/Contenty/ContentyContext';

import styles from './main.module.css'
import HomeSkeleton from '../../../pages/Home/HomeSkeleton';
import '../../../utils/Contenty/contenty.css';

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
    <main className={styles['main']} id={`${contentyInstance.getContainerId()}`}>
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
