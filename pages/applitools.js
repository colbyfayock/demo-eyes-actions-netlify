import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Applitools - Applitools Eyes GitHub Action & Netlify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Applitools
        </h1>

        <div className={styles.grid}>
          <a href="https://github.com/colbyfayock/applitools-eyes-action" className={styles.card}>
            <h3>Eyes GitHub Action &rarr;</h3>
            <p>Add the Applitools Eyes GitHub Action to your project.</p>
          </a>

          <a href="https://applitools.com/" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Applitools automated visual testing!</p>
          </a>

          <a href="https://applitools.com/tutorials/" className={styles.card}>
            <h3>Tutorials &rarr;</h3>
            <p>Discover other Applitools SDK example projects.</p>
          </a>

          <a href="https://applitools.com/docs/" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Applitools features and API.</p>
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
