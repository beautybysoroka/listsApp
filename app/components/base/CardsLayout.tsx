import EntityCard from "./entityCard";
import list from '../../styles/cardsList.module.css';


const cards = [
    {
        id: 1,
        title: 'Lord of the rings'
    },
    {
        id: 2,
        title: 'Harry Potter'
    }
]
console.log(list)

export default function entityCard({ card }) {
    return (
        <div className={list.wrapper}>
            {cards.map((card) => (
                <EntityCard key={card.id} card={card}/>
            ))}
        </div>
    )
}