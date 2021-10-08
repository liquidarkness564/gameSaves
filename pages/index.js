import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar.js';
import Search from '../components/Search.js';
import GameLibrary from '../components/GameLibrary.js';
import AddDrawer from '../components/AddDrawer.js';

export default function Home() {
  const [gameCollection, setGameCollection] = useState([]);

  const handleGameSelect = (cards) => {
    // Save to Database
    let item;
    for (let obj of cards) {
      if (obj.selected === true) { item = obj; }
    }
    const items = gameCollection.slice();
    items.push(item);
    setGameCollection(items);
    console.log(gameCollection);
  }

  return (
    <div>
      <Head>
        <title>Game Saves</title>
        <meta name="description" content="Game Saves" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
        <Search />
        <GameLibrary gameCollection={gameCollection}/>
        <AddDrawer handleGameSelect={handleGameSelect}/>
      </div>
    </div>
  )
}