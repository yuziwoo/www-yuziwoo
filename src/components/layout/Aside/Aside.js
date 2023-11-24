import scrollTop from '../../../utils/scrollTop';
import { ArrowUp } from '../../interaction/interaction';
import styles from './aside.module.css';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles['button-wrap']}>
        <button onClick={scrollTop}>
          <ArrowUp color='black'/>
        </button>
      </div>
    </aside>
  )
}

export default Aside;