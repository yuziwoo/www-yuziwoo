import Logo from '../../Logo';
import styles from './header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles['global-nav']}>
          <div className={styles['logo']} onClick={() => { props.navigate('/'); }}>
            <Logo color='black'/>
          </div>
          <nav>
            <p onClick={() => { props.navigate('/contact'); }}>CONTACT</p>
          </nav>
        </div>
      </header>
      <div className={styles['header-relative']}></div>
    </>
  );
};

export default Header;
