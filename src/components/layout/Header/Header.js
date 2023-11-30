import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../Logo';
import styles from './header.module.css';

import scrollTop from '../../../utils/scrollTop';
import { throttle } from '../../../utils/throttle';

const Header = () => {
  const defaultPosY = window.scrollY;
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(defaultPosY);

  const headerSwitch = useCallback(() => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos < prevScrollPos && !visible) {
      setVisible(true);
    }

    if (currentScrollPos > prevScrollPos && visible && currentScrollPos > 100) {
      setVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos, visible]);

  const throttleHeaderSwitch = throttle(headerSwitch, 20);

  useEffect(() => {
    window.addEventListener('scroll', throttleHeaderSwitch);

    return (() => {
      window.removeEventListener('scroll', throttleHeaderSwitch);
    });
  }, [throttleHeaderSwitch]);

  return (
    <>
      <header className={`${styles.header} ${visible ? '' : `${styles['header-off']}`}`}>
        <div className={styles['global-nav']}>
          <div className={styles['logo']}>
            <Link onClick={scrollTop} to='/' className={styles.a}>
              <Logo color='white'/>
              <Logo color='white'/>
            </Link>
          </div>
          <nav>
            <p>
              <Link onClick={scrollTop} to='/shop' className={styles.a}>
                SHOP
              </Link>
            </p>
            <p>
              <Link onClick={scrollTop} to='/about' className={styles.a}>
                ABOUT
              </Link>
            </p>
          </nav>
        </div>
      </header>
      <div className={styles['header-relative']}></div>
    </>
  );
};

export default Header;
