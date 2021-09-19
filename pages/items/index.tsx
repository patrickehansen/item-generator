import Link from 'next/link'
import styles from '../../styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a >
          ← Back to overview
        </a>
      </Link>

      <main>
        <h1 className={styles.title}>
          Welcome to Items
        </h1>

        
      </main>
    </div>
  )
}