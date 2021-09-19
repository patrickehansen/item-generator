import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Card } from '../../components/card'
import styles from '../../styles/shared.module.scss'
import { useState } from 'react';

export default function Materials() {
  const [ requirementCount, setRequirementCount ] = useState(0);

  const requirementArray = new Array(requirementCount).fill(null);
  console.log(requirementCount, requirementArray)
  return (
    <div>
      <Link href="/templates">
        <a className={styles.back}>
          ← Back to templates
        </a>
      </Link>

      <main>
        <Card>
          <h3 className={styles.title}>
            New Item Template
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
                <Grid item xs={12} sm={3} >
                  <label htmlFor="type">
                    Type:
                  </label>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <input 
                    type="text"
                    id="type"
                    required

                  />
                </Grid>
                <Grid item xs={12} sm={3} >
                  <label htmlFor="baseDice">
                    Base Dice:
                  </label>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <input 
                    type="text"
                    id="baseDice"

                  />
                </Grid>
                <Grid item xs={12} sm={3} >
                  <label htmlFor="handedness">
                    Handedness:
                  </label>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <input 
                    type="text"
                    id="handedness"

                  />
                </Grid>
                <Grid item xs={12} sm={3} >
                  <label htmlFor="size">
                    Size:
                  </label>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <input 
                    type="text"
                    id="size"

                  />
                </Grid>
                <Grid item xs={12} sm={4} >
                  <label htmlFor="productionTime">
                    Production Time:
                  </label>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <input 
                    type="text"
                    id="productionTime"

                  />
                </Grid>
                <Grid item xs={12}>
                  <h4 className={styles.center}>
                    Requirements
                  </h4>
                </Grid>
                {
                  requirementArray.map((v,i) => {
                    return (
                      <Grid item container xs={12} sm={12} spacing={1} key={i} className={styles.justifyCenter}>
                      
                        <Grid item xs={12} sm={3} >
                          <select >
                            <option>
                              Wood  
                            </option>
                            <option>
                              Metal  
                            </option>
                            <option>
                              Bone  
                            </option>  
                          </select> 
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <input
                            type="number"
                            id={`requirement${i}`}

                          />
                        </Grid>
                    </Grid>
                    )
                  })
                }
    
                <Grid item xs={6}>
                  <Button 
                    className={styles.fullWidth}
                    variant="contained"
                    style={{
                      height: '20px'
                    }}
                    onClick={(e) => {
                      setRequirementCount(requirementCount > 0 ? requirementCount - 1 : 0)
                    }}
                  >
                    -
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button 
                    className={styles.fullWidth}
                    variant="contained"
                    style={{
                      height: '20px'
                    }}
                    onClick={(e) => {
                      console.log('heyyo', requirementCount)
                      setRequirementCount(requirementCount + 1)
                    }}
                  >
                    +
                  </Button>
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
