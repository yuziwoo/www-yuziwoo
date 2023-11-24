import { Link } from 'react-router-dom';
import Logo from '../../Logo';
import styles from './footer.module.css';
import scrollTop from '../../../utils/scrollTop';
import PATH from '../../../constants/path';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['wrap']}>
        <div className={styles['logo']}>
          <Link className={styles.a} to={`${PATH.root}`} onClick={scrollTop()}>
            <Logo color='white'/>
          </Link>
        </div>
        <div className={styles['info']}>
          <h1 className={styles['title']}>고객센터</h1>
          <ul>
            <li>
              <h2>업무시간</h2>
              <p>평일 오전 9시 - 오후 6시</p>
            </li>
            <li>
              <h2>이메일</h2>
              <p>
                <Link className={styles.a} to='mailto:yuziwoo@naver.com'>yuziwoo@naver.com</Link>
              </p>
            </li>
            <li>
              <h2>카카오톡</h2>
              <p>
                <a target='_blank' rel='noreferrer' href='https://open.kakao.com/o/s0dW0TPf'>1대1 문의하기</a>
              </p>
            </li>
          </ul>
          <p className={styles['copyright']}>Copyright © 2023 Yuziwoo</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
