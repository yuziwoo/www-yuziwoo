import { useEffect } from 'react';

import { CONTENT } from '../../../constants/content';
import { visitedURL } from '../../../utils/sessionStorage';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../../pages/NotFound/NotFound';
import Content from '../../../pages/Content/Content';
import Home from '../../../pages/Home/Home';
import Contact from '../../../pages/Contact/Contact';
import Contenty from '../../../utils/Contenty';

import styles from './main.module.css'

const Main = () => {
  useEffect(() => {
    Contenty.setContenty();
    return (
      () => {
        visitedURL.setURLs();
      }
    )
  });

  return (
    <main className={`${CONTENT.className.main} ${styles.contenty}`} >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/content/:id' element={<Content />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </main>
  );
};

export default Main;
