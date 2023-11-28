import { useEffect } from 'react';
import { useContenty } from '../../utils/Contenty/ContentyContext';
import styles from './contact.module.css';

const Contact = () => {
  const contentyInstance = useContenty();

  useEffect(() => {
    contentyInstance.setContenty();
  }, [contentyInstance]);

  return(
    <div className={styles['contact']}>
      다시
    </div>
  )
};

export default Contact;