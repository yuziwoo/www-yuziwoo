import { useEffect } from 'react';

import { visitedURL } from '../../../utils/sessionStorage';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../../pages/NotFound/NotFound';
import Content from '../../../pages/Content/Content';
import Home from '../../../pages/Home/Home';
import Contact from '../../../pages/Contact/Contact';
import Contenty from '../../../utils/Contenty';
import { contents } from '../../../data/content';

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
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<Home contents={contents} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/content/:id' element={<Content contents={contents}/>} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </main>
  );
};

export default Main;
