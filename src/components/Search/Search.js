import styles from "./Search.module.css"
export default function Search(){
    return(
        <article>
            <input type="search"className={styles.input} placeholder="Search..."/>
            <button className={styles.button}>Find</button>
        </article>
    )
}