import styles from '../../styles/Menu.module.css'

const lists = ['movies', 'books']


export default function entityCard({ card }) {
    return (
        <ul>
            {lists.map((entity,index) =>(
                <li key={index}>entity.name</li>
            ))}
        </ul>
    )
}