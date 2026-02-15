import styles from '../../styles/cardPreview.module.css'


export default function entityCard({ card }) {
    return (
        <div className={styles.wrapper}>
            <h1>{card.title}</h1>
        </div>
    )
}