import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'

export default function Home() {
  // const [link, setLink] = useState({});
  const getLink = () => {
    let url = "http://localhost:3001/initiateTelebot"
    fetch(url)
    .then(res => {
        console.log(res)
        window.open(res.link, '_blank');
        //checkwhether get the link
        // setLink(res.link);
    });
    //window.open("https://www.google.com", '_blank');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to LumiNUS!
        </h1>

        <div className={styles.grid} onClick={getLink}>
          <a
            className={styles.card}
          >
            <h3>Integrate with telegram &rarr; </h3>
            <p>
              receive notifications when dues are getting closer
            </p>
          </a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
