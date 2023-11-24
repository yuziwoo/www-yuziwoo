import { Link } from "react-router-dom";
import PATH from "../../constants/path";
import styles from './contentlist.module.css';
import scrollTop from '../../utils/scrollTop';

const ContentList = (props) => {
  const contents = [...props.contents].splice(0, 6);

  const imgSrc = (id) => {
    return PATH.contentThumb(id);
  }

  return (
    <ul className={styles['list']}>
      {contents.map((data, index) => (
        <li className={styles['content']} key={index}>
          <Link className={styles.a} to={`${PATH.content}${data.id}`} onClick={scrollTop}>
            <div className={styles['thumb']}>
              <img src={imgSrc(data.id)} alt={data.title} />
            </div>
            <h3>{data.brand}</h3>
            <p>{data.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ContentList;
