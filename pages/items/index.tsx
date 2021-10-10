import Link from 'next/link'
import { Card } from '../../components/card'
import { useState } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { RootState } from '../../types/store';
import { getTemplates } from '../../requests/templates/getTemplates';
import ItemForm from '../../components/forms/itemForm'
import styles from '../../styles/shared.module.scss'

export default function Items() {
  const templates = useSelector((state: RootState) => state.templates.allTemplates);
  const templateMap = useSelector((state: RootState) => state.templates.templateMap);
  const [ selectedTemplate, setSelectedTemplate ] = useState(null);
  const [fetched, setFetched] = useState(false);

  const dispatch = useDispatch();

  if (!templates.length && !fetched) {
    fetchTemplates();
  }

  async function fetchTemplates() {
    setFetched(true);
    const templates = await getTemplates();
  
    dispatch({
      type: 'setTemplates',
      data: templates
    })
  }

  async function submitForm(e) {
    try {
      e.preventDefault();
      const t = e.target;
      console.log('onsubmit', e)

    } catch (error) {
      console.error('Error in submit form new template::err', error)
    }
  }

  function selectTemplate(e) {
    e.preventDefault();

    const id = e.target.value;
    const template = templateMap[id];

    if (!template) return setSelectedTemplate(null);

    setSelectedTemplate(template);
  }

  return (
    <div>
      <Link href="/">
        <a className={styles.back}>
          ← Back to overview
        </a>
      </Link>

      <main>
        <h1 className={styles.title}>
          Welcome to Items
        </h1>
        {
          templates && (
            <Card>
              <select 
                defaultValue="none"
                onChange={selectTemplate}
                className={styles.center}
              >
                <option value="none">
                  -----
                </option>
                {
                  templates.map((v,i) => (
                    <option value={v.TemplateID} key={i}>
                      {v.Name}
                    </option>
                  ))
                }
              </select>
              {
                selectedTemplate && (
                  <ItemForm 
                    template={selectedTemplate}
                    onSubmit={submitForm}
                  />
                )
              }
            </Card>
          )
        }
      </main>
    </div>
  )
}