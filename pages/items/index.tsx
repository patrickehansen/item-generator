import Link from 'next/link'
import { Card } from '../../components/card'
import { useState } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { RootState } from '../../types/store';
import { getTemplates } from '../../requests/templates/getTemplates';
import ItemForm from '../../components/forms/itemForm'
import { addItem } from '../../requests/items/addItem'
import { getItems } from '../../requests/items/getItems'
import ItemList from '../../components/tables/itemTable'
import styles from '../../styles/shared.module.scss'

export default function Items() {
  const templates = useSelector((state: RootState) => state.templates.allTemplates);
  const templateMap = useSelector((state: RootState) => state.templates.templateMap);
  const items = useSelector((state: RootState) => state.items.allItems);
  const [ selectedTemplate, setSelectedTemplate ] = useState(null);
  const [fetched, setFetched] = useState(false);

  const dispatch = useDispatch();

  if (!templates.length && !fetched) {
    fetchTemplates();
    fetchItems();
  }

  async function fetchTemplates() {
    setFetched(true);
    const templates = await getTemplates();
  
    dispatch({
      type: 'setTemplates',
      data: templates
    })
  }

  async function fetchItems() {
    try {
      setFetched(true);
      const items = await getItems();
      dispatch({
        type: 'setItems',
        data: items
      })
    } catch (error) {
      console.error('Error in get items::err', error)
    }
  }

  async function submitForm(item) {
    try {
      await addItem(item);
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
        <Card>
          <ItemList 
            list={items}
          />
        </Card>
      </main>
    </div>
  )
}