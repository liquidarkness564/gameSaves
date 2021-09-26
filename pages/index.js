import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar.js';
import Search from '../components/Search.js';
import GameLibrary from '../components/GameLibrary.js';

export default function Home() {
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
        <GameLibrary />
      </div>
    </div>
  )
}