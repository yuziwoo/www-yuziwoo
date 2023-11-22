import Logo from '../../Logo';
import headerStyles from './header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={headerStyles.header}>
        <div className={headerStyles['global-nav']}>
          <div className={headerStyles['logo']} onClick={() => { props.navigate('/'); }}>
            <Logo color='black'/>
          </div>
          <nav>
            <p onClick={() => { props.navigate('/contact'); }}>CONTACT</p>
          </nav>
        </div>
      </header>
      <div className={headerStyles['header-relative']}></div>
    </>
  );
};

export default Header;
