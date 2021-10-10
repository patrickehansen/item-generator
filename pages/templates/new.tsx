import { useState } from 'react';
import Link from 'next/link'
import { Card } from '../../components/card'
import styles from '../../styles/shared.module.scss'
import { SuccessPanel } from '../../components/success'
import { addTemplate } from '../../requests/templates/addTemplate'
import TemplateForm from '../../components/forms/templateForm'


export default function Materials() {
  const [ successMessage, setSuccessMessage ]  = useState(null);

  async function submitForm(e, requirementCount, setRequirementCount) {
    try {
      e.preventDefault();
      const t = e.target;
      console.log('onsubmit', e)
  
      const requirements = [];
      for (let i = 0; i < requirementCount; i++) {
        requirements.push({
          Type: t[`requirementType${i}`].value,
          Count: t[`requirementCount${i}`].value,
        })
      }

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
  
      await addTemplate(built);
      t.reset();
      setRequirementCount(0);
      setSuccessMessage(`added ${built.Name}`);
  
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    } catch (error) {
      console.error('Error in submit form new template::err', error)
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
            New Item Template
          </h3>
          <div style={{height: '30px'}} />
          <TemplateForm 
            template={null}
            onSubmit={submitForm}
          />
        </Card>
        {successMessage && <SuccessPanel message={successMessage} />}
      </main>
    </div>
  )
}
