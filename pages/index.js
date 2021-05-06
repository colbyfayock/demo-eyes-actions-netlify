import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Applitools Eyes GitHub Action & Netlify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          test
        </h1>

        <div className={styles.grid}>
          <Link href="/netlify">
            <a className={styles.card}>
              <h3>Netlify &rarr;</h3>
              <p>Learn more about Netlify</p>
            </a>
          </Link>
          <Link href="/nextjs">
            <a className={styles.card}>
              <h3>Next.js &rarr;</h3>
              <p>Learn more about Next.js</p>
            </a>
          </Link>
          <Link href="/github-actions">
            <a className={styles.card}>
              <h3>GitHub Actions &rarr;</h3>
              <p>Learn more about GitHub Actions</p>
            </a>
          </Link>
        </div>
      </main>

      <footer>
        <p>
          <a href="https://github.com/colbyfayock/applitools-eyes-action">
            Applitools Eyes GitHub Action
          </a>
          {` `}|{` `}
          <a href="https://github.com/colbyfayock/demo-eyes-actions-netlify">
            Demo Source
          </a>
        </p>
      </footer>
    </div>
  )
}
