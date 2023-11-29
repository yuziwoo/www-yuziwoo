import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../../pages/Home/Home';
import Content from '../../../pages/Content/Content';
import Contact from '../../../pages/Contact/Contact';
import NotFound from '../../../pages/NotFound/NotFound';

import { visitedURL } from '../../../utils/sessionStorage';
import { contents } from '../../../data/content';
import { useContenty } from '../../../utils/Contenty/ContentyContext';

import styles from './main.module.css'
import About from '../../../pages/About/About';

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
        <Route path='/' element={<Home contents={contents}/>} />
        <Route path='/content/:id' element={<Content contents={contents}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </main>
  );
};

export default Main;
