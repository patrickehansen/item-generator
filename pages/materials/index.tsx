import Link from 'next/link'
import { LinkCard } from '../../components/card'
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

        <LinkCard href="/materials/new">
          <h3>
            Add New
          </h3>
          <p>Detail a new material for use</p>
        </LinkCard>
      </main>
    </div>
  )
}