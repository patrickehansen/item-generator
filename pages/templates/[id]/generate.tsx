import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector  } from 'react-redux'
import Link from 'next/link'
import { Card } from '../../../components/card'
import { RootState } from '../../../types/store'
import styles from '../../../styles/shared.module.scss'
import { SuccessPanel } from '../../../components/success'
import { addItem } from '../../../requests/items/addItem'

import ItemForm from '../../../components/forms/itemForm'


export default function Generate() {
  const [ successMessage, setSuccessMessage ] = useState(null);
  const router = useRouter()

  const { id } = router.query
  const template = useSelector((state: RootState) => state.templates.templateMap[id as string])

  if (!template) {
    return <div />
    // get template
  }

  async function submitForm(item) {
    try {
      await addItem(item);

      setSuccessMessage(`added ${item.Name}`)
    } catch (error) {
      console.error('Error in submit form new item::err', error)
    }
  }

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
            New {template.Name}
          </h3>
          <div style={{height: '30px'}} />
          <ItemForm 
            template={template}
            onSubmit={submitForm}
          />
        </Card>
        {successMessage && <SuccessPanel message={successMessage} />}
      </main>
    </div>
  )
}
