import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch  } from 'react-redux'
import Link from 'next/link'
import { RootState } from '../../types/store';
import MaterialForm from '../../components/forms/materialForm'
import { editMaterial } from '../../requests/materials/editMaterial'
import { Card } from '../../components/card'
import { SuccessPanel } from '../../components/success'
import styles from '../../styles/shared.module.scss'

export default function EditMaterial(): JSX.Element {
  const [ successMessage, setSuccessMessage ]  = useState(null);
  const router = useRouter()

  const { id } = router.query
  const material = useSelector((state: RootState) => state.materials.materialMap[id as string])

  async function submitForm(e) {
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
  
      await editMaterial(id as string, built);
      t.reset();
      setSuccessMessage(`editted ${built.Name}`);
  
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    } catch (error) {
      console.error('Error in submit form edit material::err', error)
    }
  }

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
            Edit Material
          </h3>
          <div style={{height: '30px'}} />
          <MaterialForm 
            onSubmit={(e) => {submitForm(e)}}
            material={material}
          />
        </Card>
        {successMessage && <SuccessPanel message={successMessage} />}
      </main>
    </div>
  )
}
