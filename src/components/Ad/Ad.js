import styles from "./Ad.module.css";
export default function Ad(props) {
    console.log(props.ad)
  return (
    <div className={styles.grid}>
      <a href="#">
        <h3>{props.ad.title}</h3>
        <p>{props.ad.description}</p>
        <p>{props.ad.price}</p>
      </a>
    </div>
  );
}
