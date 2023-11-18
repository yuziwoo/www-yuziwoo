import { useEffect } from 'react';

import { CONTENT } from '../../../constants/content';
import { visitedURL } from '../../../utils/sessionStorage';

const Main = () => {
  useEffect(() => {
    visitedURL.setURLs();
  }, []);

  return <main className={CONTENT.className.main}></main>;
};

export default Main;
