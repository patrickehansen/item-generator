import Head from 'next/head'

import styles from '../styles/home.module.scss'
import sharedStyles from '../styles/shared.module.scss'
import { LinkCard } from '../components/card';
import { Grid } from '../components/grid';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Orcish Revenge Item Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={sharedStyles.title}>
          Welcome to the Item Generator!
        </h1>

        <div className={styles.spacer} />
        <Grid>
          <LinkCard href="/materials">
            <h3>Materials &rarr;</h3>
            <p>Add, edit and learn about all the different kinds of materials you can use!</p>
          </LinkCard>
          <LinkCard href="/templates">
            <h3>Item Templates &rarr;</h3>
            <p>Add, edit and learn about all the different kinds of items you can make!</p>
          </LinkCard>
          <LinkCard href="/items">
            <h3>Items &rarr;</h3>
            <p>Create the item of your dreams!</p>
          </LinkCard>
        </Grid>
      </main>
    </div>
  )
}
