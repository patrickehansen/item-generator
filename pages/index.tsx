import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Orcish Revenge Item Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to the Item Generator!
        </h1>

        <div className={styles.grid}>
          <Link href="/materials">
            <a className={styles.card}>
              <h3>Materials &rarr;</h3>
              <p>Add, edit and learn about all the different kinds of materials you can use!</p>
            </a>
          </Link>
          <Link href="/templates">
            <a className={styles.card}>
              <h3>Item Templates &rarr;</h3>
              <p>Add, edit and learn about all the different kinds of items you can make!</p>
            </a>
          </Link>
          <Link href="/items">
            <a
              className={styles.card}
            >
              <h3>Items &rarr;</h3>
              <p>Create the item of your dreams!</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
