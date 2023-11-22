import PATH from "../../constants/path";

const ContentList = (props) => {
  const contents = props.contents;

  const imgSrc = (id) => {
    return PATH.contentThumb(id);
  }

  return (
    <ul>
      {contents.map((data, index) => (
        <li key={index}>
          <div><img src={imgSrc(data.id)} alt={data.title}></img></div>
          <h3>{data.brand}</h3>
          <p>{data.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default ContentList;
