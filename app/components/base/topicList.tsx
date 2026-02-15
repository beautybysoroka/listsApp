import styles from '../../styles/cardList1.module.css'
import entityCard from './entityCard'


export default function topicList({ cards }) {
    return (
        <div className={styles.wrapper}>
            {cards.map((card, index) => (
                <entityCard card={card}/>
            ))}
        </div>
    )
}