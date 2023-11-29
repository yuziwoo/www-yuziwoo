import { useEffect } from "react";
import { useContenty } from "../../utils/Contenty/ContentyContext";

const About = () => {
  const contentyInstance = useContenty();

  useEffect(() => {
    contentyInstance.setContenty();
  }, [contentyInstance]);

  return (
    <div>About</div>
  )
};

export default About;