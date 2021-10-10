import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import AssignmentIcon from '@mui/icons-material/Assignment';
import { getMaterials } from '../../requests/materials/getMaterials';
import { Card } from '../../components/card'
import styles from '../../styles/shared.module.scss'
import { RootState } from '../../types/store';
import { ItemTemplate } from '../../types/template';

interface Props {
  template: ItemTemplate;
  onSubmit: {
    (event: any): any
  }
}

interface Calculated {
  bonus: string;
  base: number;
}

export default function ItemForm({template, onSubmit}: Props): JSX.Element {
  const [ calculated, setCalculated ] = useState(null);
  const [ newName, setNewName ] = useState(template.Name);
  const categoryMap = useSelector((state: RootState) => state.materials.categoryMap);
  const materialMap = useSelector((state: RootState) => state.materials.materialMap);
  const dispatch = useDispatch();

  async function fetchMaterials() {
    const materials = await getMaterials();
  
    dispatch({
      type: 'setMaterials',
      data: materials
    })
  }

  if (!Object.keys(categoryMap).length) { 
    fetchMaterials();
    return <div />
  }

  if (!template) return <div />

  function calculate(e) {
    e.preventDefault();

    let node = e.target;

    while (node.nodeName !== "FORM") {
      node = node.parentElement;
    }

    const bonus = template.Requirements.reduce((a: any, v: any, i: number) => {
      const val = node[`requirement${i}`].value;
      const material = materialMap[val];

      return a + ( v.Count * material.Damage)
    }, 0)

    setCalculated({
      base: template.BaseDice,
      bonus: bonus,
    })
  }

  function setName(e) {
    e.preventDefault();

    setNewName(e.target.value);
  }

  function copyToClipboard() {
    if (!calculated) return;

    navigator.clipboard.writeText(`${newName}\t${calculated.base} + ${calculated.bonus}`)
  }

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
              defaultValue={template ? template.Name : ''}
              onChange={setName}
            />
          </Grid>
          {
            template.Requirements.map((v, i) => {
              return (
                <Grid item xs={12} sm={4}>
                  {v.Type}
                  <select 
                    key={i}
                    id={`requirement${i}`}
                    onChange={calculate}
                  >
                    {
                      categoryMap[v.Type].map((m, j) => (
                        <option key={j} value={m.MaterialID}>
                          { m.Name }
                        </option>
                      ))
                    }
                  </select>
                </Grid>
              )
            })
          }

          {
            calculated && <Grid item xs={12} sm={9}>
              <strong>Damage:</strong>  <span>{`${calculated.base} + ${calculated.bonus}`}</span>
            </Grid>
          }

          <Grid item xs={12}>
            {
              calculated && <Button  onClick={copyToClipboard}>
                <AssignmentIcon/>
              </Button>
            }
            
            <Button type="submit" className={styles.pullRight} variant="contained">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  )
}
