import { useState } from 'react';
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { addMaterial } from '../../requests/materials/addMaterial'
import { Card } from '../../components/card'
import { SuccessPanel } from '../../components/success'
import styles from '../../styles/shared.module.scss'

async function submitForm(e, setAddedMaterial) {
  try {
    e.preventDefault();
    const t = e.target;

    const built = {
      Name: t.name.value,
      Category: t.category.value,
      MeltingTemperature: Number(t.meltingTemperature.value),
      CraftingDifficulty: Number(t.craftingDifficulty.value),
      Hardness: Number(t.hardness.value),
      Damage: Number(t.damage.value),
      Armor: Number(t.armor.value),
      Weight: Number(t.weight.value),
    }

    await addMaterial(built);
    t.reset();
    setAddedMaterial(`added ${built.Name}`);

    setTimeout(() => {
      setAddedMaterial(null)
    }, 5000)
  } catch (error) {
    console.error('Error in submit form new material::err', error)
  }
}

export default function NewMaterialForm() {
  const [ successMessage, setSuccessMessage ]  = useState(null);

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
          <form className={styles.form} onSubmit={(e) => {submitForm(e, setSuccessMessage)}}>
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

                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <label htmlFor="craftingDifficulty">
                    Crafting Difficulty:
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <select defaultValue={0} id="craftingDifficulty">
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
                    step="0.25"

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
                    step="0.25"
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
                    step="0.25"
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
                    step="0.25"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" className={styles.pullRight} variant="contained">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
        </Card>
        {successMessage && <SuccessPanel message={successMessage} />}
      </main>
    </div>
  )
}
