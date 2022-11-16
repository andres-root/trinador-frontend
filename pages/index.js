import React from 'react';

import Timeline from '../components/Timeline';

import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Timeline />
    </div>
  );
}
