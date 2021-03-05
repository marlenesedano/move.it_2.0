import Head from 'next/head';
import { useContext } from 'react';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import styles from '../styles/components/HomeMoveit.module.css'
import { ExperienceBar } from './ExperienceBar';



export function HomeMoveit(){
<div>
    <Head>
    <title>Inicio | Move.it</title>
  </Head>
  <ExperienceBar />

  
  
</div>

}

