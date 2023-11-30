import scrollTop from '../../../utils/scrollTop';
import { ArrowUp } from '../../interaction/interaction';
import './aside.css';

const Aside = () => {
  return (
    <aside>
      <div className='button-wrap'>
        <button onClick={scrollTop}>
          <ArrowUp color='white'/>
          <ArrowUp color='white'/>
        </button>
      </div>
    </aside>
  )
}

export default Aside;