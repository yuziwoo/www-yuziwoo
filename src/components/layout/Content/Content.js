// useParams는 깃허브 페이지에서 사용이 불가능하여 Outlet을 사용하기로 함

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