import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { getMaterials } from '../../requests/materials/getMaterials';
import { Card } from '../../components/card'
import styles from '../../styles/shared.module.scss'
import { RootState } from '../../types/store';
import { ItemTemplate } from '../../types/template';

interface Props {
  template: ItemTemplate;
  onSubmit: {
    (event: any, requirementCount: number, setRequirementCount: any): any
  }
}

export default function TemplateForm({template, onSubmit}: Props): JSX.Element {
  const [ requirementCount, setRequirementCount ] = useState(template ? template.Requirements.length : 0);
  const materialMap = useSelector((state: RootState) => state.materials.categoryMap);
  const requirementArray = new Array(requirementCount).fill(null);
  const dispatch = useDispatch();

  async function fetchMaterials() {
    const materials = await getMaterials();
  
    dispatch({
      type: 'setMaterials',
      data: materials
    })
  }

  if (!Object.keys(materialMap).length) {
    fetchMaterials();
  }
  
  return (
    <Card>
      <form className={styles.form} onSubmit={(e) => {onSubmit(e, requirementCount, setRequirementCount)}}>
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
              defaultValue={template ? template.Name : ''}
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
              defaultValue={template ? template.Category : ''}
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
              defaultValue={template ? template.Type : ''}

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
              defaultValue={template ? template.BaseDice : ''}
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
              defaultValue={template ? template.Handedness : ''}
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
              defaultValue={template ? template.Size : ''}
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
              defaultValue={template ? template.ProductionTime : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <h4 className={styles.center}>
              Requirements
            </h4>
          </Grid>
          {
            requirementArray.map((v,i) => {
              console.log(v, template.Requirements, template.Requirements[i]?.Type)
              return (
                <Grid item container xs={12} sm={12} spacing={1} key={i} className={styles.justifyCenter}>
                  <Grid item xs={12} sm={3} >
                    <select 
                      id={`requirementType${i}`}
                      defaultValue={template ? template.Requirements[i]?.Type : ''}
                    >
                      {
                        Object.keys(materialMap).map((v,i) => (
                          <option key={i} value={v}>
                            {v}
                          </option>
                        ))
                      }
                    </select> 
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <input
                      type="number"
                      id={`requirementCount${i}`}
                      step="0.05"
                      defaultValue={template ? template.Requirements[i]?.Count : ''}
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
                setRequirementCount(requirementCount + 1)
              }}
            >
              +
            </Button>
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
