import { useParams } from "react-router-dom";
import styles from './content.module.css';

import { useContenty } from '../../utils/Contenty/ContentyContext';
import { useEffect } from "react";

const Content = () => {
  const contentyInstance = useContenty();
  const {id} = useParams();

  useEffect(() => {
    contentyInstance.setContenty();
  }, [contentyInstance]);

  return(
    <div className={`${contentyInstance.getContainerId()} ${styles['contenty']}`}>
      {id}
    </div>
  )
};

export default Content;