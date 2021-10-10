import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector  } from 'react-redux'
import Link from 'next/link'
import { RootState } from '../../../types/store';
import TemplateForm from '../../../components/forms/templateForm'
import { editTemplate } from '../../../requests/templates/editTemplate'
import { Card } from '../../../components/card'
import { SuccessPanel } from '../../../components/success'
import styles from '../../../styles/shared.module.scss'

export default function EditTemplate(): JSX.Element {
  const [ successMessage, setSuccessMessage ] = useState(null);
  const router = useRouter()

  const { id } = router.query
  const template = useSelector((state: RootState) => state.templates.templateMap[id as string])

  async function submitForm(e) {
    try {
      e.preventDefault();
      const t = e.target;
  
      const requirements = [];
  
      const built = {
        Name: t.name.value,
        Category: t.category.value,
        Type: t.type.value,
        BaseDice: t.type.value,
        Handedness: t.handedness.value,
        Size: t.size.value,
        ProductionTime: t.productionTime.value,
        Requirements: requirements,
      }
  
      await editTemplate(id as string, built);
      t.reset();
      setSuccessMessage(`editted ${built.Name}`);
  
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    } catch (error) {
      console.error('Error in submit form edit template::err', error)
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
            Edit Template
          </h3>
          <div style={{height: '30px'}} />
          <TemplateForm 
            onSubmit={(e) => {submitForm(e)}}
            template={template}
          />
        </Card>
        {successMessage && <SuccessPanel message={successMessage} />}
      </main>
    </div>
  )
}
