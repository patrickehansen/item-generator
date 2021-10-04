import { useState } from 'react';
import Link from 'next/link'
import MaterialForm from '../../components/forms/materialForm'
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

export default function NewMaterial() {
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
          <MaterialForm 
            onSubmit={(e) => {submitForm(e, setSuccessMessage)}}
            material={null}
          />
        </Card>
        {successMessage && <SuccessPanel message={successMessage} />}
      </main>
    </div>
  )
}
