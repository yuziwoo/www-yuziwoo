import PATH from "../../constants/path";
import styles from './contentlist.module.css';

const ContentList = (props) => {
  const contents = [...props.contents].splice(0, 6);

  const imgSrc = (id) => {
    return PATH.contentThumb(id);
  }

  return (
    <ul className={styles['list']}>
      {contents.map((data, index) => (
        <li className={styles['content']} key={index} onClick={() => {
          props.navigate(`${PATH.content}${data.id}`);
        }}>
          <div className={styles['thumb']}><img src={imgSrc(data.id)} alt={data.title}></img></div>
          <h3>{data.brand}</h3>
          <p>{data.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default ContentList;
