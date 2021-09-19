import Link from 'next/link'
import styles from '../../styles/shared.module.scss'

export default function Materials() {
  return (
    <div>
      <Link href="/">
        <a className={styles.back}>
          ← Back to overview
        </a>
      </Link>

      <main>
        <h1 className={styles.title}>
          Welcome to Materials
        </h1>

        
      </main>
    </div>
  )
}