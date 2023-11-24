import { Link } from 'react-router-dom';
import Logo from '../../Logo';
import styles from './header.module.css';
import scrollTop from '../../../utils/scrollTop';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles['global-nav']}>
          <div className={styles['logo']}>
            <Link onClick={scrollTop()} to='/' className={styles.a}>
              <Logo color='black'/>
            </Link>
          </div>
          <nav>
            <p>
              <Link onClick={scrollTop()} to='/contact' className={styles.a}>
                CONTACT
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
