import { useParams } from "react-router-dom";
import { CONTENT } from "../../constants/content";
import styles from './content.module.css';

const Content = () => {
  const {id} = useParams();

  return(
    <div className={`${CONTENT.className.main} ${styles['contenty']}`}>
      {id}
    </div>
  )
};

export default Content;