'use client'

import { useState } from 'react';
import EntityCard from "./components/base/entityCard";
import list from './styles/cardsList.module.css';

export default function HomePage() {
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
const [likes, setLikes] = useState(0);

function handleClick() {
setLikes(likes + 1);
}

return (
<div>
    <div className={list.wrapper}>
        {cards.map((card) => (
            <EntityCard key={card.id} card={card}/>
        ))}
    </div>

</div>
);
}