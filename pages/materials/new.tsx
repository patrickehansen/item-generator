import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Card } from '../../components/card'
import styles from '../../styles/shared.module.scss'

export default function Materials() {
  return (
    <div>
      <Link href="/materials">
        <a className={styles.back}>
          ← Back to materials
        </a>
      </Link>

      <main>
        <Card>
          <h3 className={styles.title}>
            New Material
          </h3>
          <div style={{height: '30px'}} />
          <form className={styles.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} >
                  <label htmlFor="name">
                    Name:
                  </label>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <input 
                    type="text"
                    id="name"
                    required

                  />
                </Grid>
                <Grid item xs={12} sm={3} >
                  <label htmlFor="category">
                    Category:
                  </label>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <input 
                    type="text"
                    id="category"
                    required

                  />
                </Grid>
              
                <Grid item xs={12} sm={6} >
                  <label htmlFor="meltingTemperature">
                    Melting Temperature:
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input 
                    type="number"
                    id="meltingTemperature"
                    required

                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <label htmlFor="craftingDifficulty">
                    Crafting Difficulty:
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <select defaultValue={0}>
                    <option value={0}>
                      Trivial
                    </option>
                    <option value={1}>
                      Easy
                    </option>
                    <option value={2}>
                      Moderate
                    </option>
                    <option value={3}>
                      Somewhat Hard
                    </option>
                    <option value={4}>
                      Hard
                    </option>
                    <option value={5}>
                      Very Hard
                    </option>
                    <option value={6}>
                      Extremely Hard
                    </option>
                    <option value={7}>
                      GLHF
                    </option>
                  </select>
                </Grid>
                <Grid item xs={12} sm={6} >
                  <label htmlFor="hardness">
                    Hardness:
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input 
                    type="number"
                    id="hardness"
                    required

                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <label htmlFor="damage">
                    Damage per panel:
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input 
                    type="number"
                    id="damage"
                    required

                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <label htmlFor="armor">
                    Armor per panel:
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input 
                    type="number"
                    id="armor"
                    required

                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <label htmlFor="weight">
                    Weight:
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input 
                    type="number"
                    id="weight"
                    required

                  />
                </Grid>

                <Grid item xs={12}>
                  <Button className={styles.pullRight} variant="contained">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
        </Card>
      </main>
    </div>
  )
}
