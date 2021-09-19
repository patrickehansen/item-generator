import Link from 'next/link'
import { LinkCard } from '../../components/card'
import styles from '../../styles/shared.module.scss'

export default function Templates() {
  return (
    <div >
      <Link href="/">
        <a className={styles.back}>
          ← Back to overview
        </a>
      </Link>
      <main>
        <h1 className={styles.title}>
          Welcome to Templates
        </h1>
        
        <LinkCard href="/templates/new">
          <h3>
            Add New
          </h3>
          <p>Detail a new item template for use</p>
        </LinkCard>
      </main>
        
    </div>
  )
}