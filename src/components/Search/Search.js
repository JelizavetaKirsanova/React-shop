import styles from "./Search.module.css"
export default function Search(){
    return(
        <article>
            <input type="search" placeholder="Search..."/>
            <button className={styles.button}>Find</button>
        </article>
    )
}