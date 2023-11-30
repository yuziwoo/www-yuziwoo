import { useParams } from "react-router-dom";

import { useContenty } from '../../utils/Contenty/ContentyContext';
import { useEffect } from "react";

const Shoplist = () => {
  const contentyInstance = useContenty();
  const {id} = useParams();

  useEffect(() => {
    contentyInstance.setContenty();
  }, [contentyInstance]);

  return(
    <div>
      {id}
    </div>
  )
};

export default Shoplist;