import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GitHub Actions - Applitools Eyes GitHub Action & Netlify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          GitHub Actions
        </h1>

        <div className={styles.grid}>
          <a href="https://docs.github.com/en/actions" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about GitHub Actions features and API.</p>
          </a>

          <a href="https://github.com/features/actions" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about GitHub Actions!</p>
          </a>

          <a href="https://github.com/sdras/awesome-actions" className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover awesome example GitHub Actions.</p>
          </a>

          <a href="https://github.com/marketplace?type=actions" className={styles.card}>
            <h3>Marketplace &rarr;</h3>
            <p>Install Actions right from the GitHub Marketplace.</p>
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
