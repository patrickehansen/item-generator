import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Card } from '../../components/card'
import styles from '../../styles/shared.module.scss'
import { Material } from '../../types/material';

interface Props {
  material: Material;
  onSubmit: {
    (event: any): any
  }
}

export default function MaterialForm({material, onSubmit}: Props): JSX.Element {
  return (
    <Card>
      <form className={styles.form} onSubmit={(e) => {onSubmit(e)}}>
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
              defaultValue={material ? material.Name : ''}

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
              defaultValue={material ? material.Category : ''}

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
              defaultValue={material ? material.MeltingTemperature : ''}

            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <label htmlFor="craftingDifficulty">
              Crafting Difficulty:
            </label>
          </Grid>
          <Grid item xs={12} sm={6}>
            <select id="craftingDifficulty" defaultValue={material ? material.CraftingDifficulty : 0}>
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
              defaultValue={material ? material.Hardness : ''}
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
              defaultValue={material ? material.Damage : ''}
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
              defaultValue={material ? material.Armor : ''}
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
              defaultValue={material ? material.Weight : ''}
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
  )
}
