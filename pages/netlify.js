import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netlify - Applitools Eyes GitHub Action & Netlify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Netlify
        </h1>

        <div className={styles.grid}>
          <a href="https://www.netlify.com/" className={styles.card}>
            <h3>Netlify &rarr;</h3>
            <p>Learn more about Netlify</p>
          </a>

          <a href="https://www.netlify.com/with/nextjs/" className={styles.card}>
            <h3>Next.js on Netlify &rarr;</h3>
            <p>Learn how to deploy Next.js on Netlify!</p>
          </a>
        </div>
      </main>

      <footer>
        <p>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </p>
      </footer>
    </div>
  )
}
