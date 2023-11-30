import { useEffect } from 'react';
import { useContenty } from '../../utils/Contenty/ContentyContext';

const Contact = (props) => {
  const contentyInstance = useContenty();

  useEffect(() => {
    contentyInstance.setContenty();
  }, [contentyInstance]);

  return(
    <section>
      shop
    </section>
  )
};

export default Contact;