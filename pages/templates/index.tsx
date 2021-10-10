import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector, useDispatch  } from 'react-redux'
import { LinkCard, Card } from '../../components/card'
import TemplateList from '../../components/tables/templateTable';
import styles from '../../styles/shared.module.scss'
import { RootState } from '../../types/store';
import { ItemTemplate } from '../../types/template';
import { getTemplates } from '../../requests/templates/getTemplates';
import { DeleteTemplateModal } from '../../components/modals/deleteTemplateModal';

export default function Templates() {
  const templateMap = useSelector((state: RootState) => state.templates.categoryMap)
  const dispatch = useDispatch();

  const [deletingTemplate, setDeletingTemplate] = useState(null);
  const [fetched, setFetched] = useState(false);

  async function fetchTemplates() {
    setFetched(true);
    const templates = await getTemplates();
  
    dispatch({
      type: 'setTemplates',
      data: templates
    })
  }

  if (!fetched) {
    fetchTemplates();
  }

  return (
    <div >
      <Head>
        <title>Item Templates</title>
      </Head>

      <Link href="/">
        <a className={styles.back}>
          ← Back to overview
        </a>
      </Link>
      <main>
        <h1 className={styles.title}>
          Welcome to Templates
        </h1>

        {
          Object.entries(templateMap).map(([name, entries]: [string, Array<ItemTemplate>], i) => (
            <Card key={i}>
              <h3>{name}s</h3>
              <TemplateList 
                list={entries}
                onDelete={(template) => setDeletingTemplate(template)}
              />
            </Card>
          ))
        }
        
        <LinkCard href="/templates/new">
          <h3>
            Add New
          </h3>
          <p>Detail a new item template for use</p>
        </LinkCard>

        <DeleteTemplateModal 
          template={deletingTemplate} 
          onClose={(shouldFetch: boolean) => {
            if (shouldFetch) fetchTemplates();
            setDeletingTemplate(null)
          }}  
        />
      </main>
        
    </div>
  )
}