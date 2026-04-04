'use client'

import { useState } from 'react';
import CardsLayout from "./components/base/CardsLayout";
import Menu from "./components/menu/Menu";
import styles from "./styles/pages/MainPage.module.css";


export default function HomePage() {

return (
<div className={styles.wrapper}>
    <Menu/>
    <CardsLayout/>

</div>
);
}