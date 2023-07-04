import styles from "./Ad.module.css";
import svg from "./cross.svg"
import { deleteAd } from "../../services/firebase/delete";
export default function Ad(props) {
    console.log(props.ad)
  return (
    <div className={styles.grid}>
        <div className={styles.crossContainer}><img className={styles.cross} onClick={deleteAd(props.ad.id)} src={svg} alt="del"/></div>
      <a href="#">
        <h3>{props.ad.title}</h3>
        <p>{props.ad.description}</p>
        <p>{props.ad.price}</p>
      </a>
    </div>
  );
}
