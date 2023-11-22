import { useParams } from "react-router-dom";

const Content = () => {
  const {id} = useParams();

  return(
    <>
      {id}
    </>
  )
};

export default Content;