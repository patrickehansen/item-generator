import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector, useDispatch  } from 'react-redux'
import { LinkCard, Card } from '../../components/card'
import MaterialList from '../../components/tables/materialTable';
import styles from '../../styles/shared.module.scss'
import { RootState } from '../../types/store';
import { Material } from '../../types/material';
import { getMaterials } from '../../requests/materials/getMaterials';
import { DeleteMaterialModal } from '../../components/modals/deleteMaterialModal';

export default function Materials() {

  const materialMap = useSelector((state: RootState) => state.materials.categoryMap)
  const dispatch = useDispatch();

  const [deletingMaterial, setDeletingMaterial] = useState(null);

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
    <div>
      <Link href="/">
        <a className={styles.back}>
          ← Back to overview
        </a>
      </Link>

      <Head>
        <title>Materials</title>
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to Materials
        </h1>

        {
          Object.entries(materialMap).map(([name, entries]: [string, Array<Material>], i) => (
            <Card key={i}>
              <h3>{name}s</h3>
              <MaterialList 
                list={entries}
                onDelete={(material) => setDeletingMaterial(material)}
              />
            </Card>
          ))
        }
        
        <LinkCard href="/materials/new">
          <h3>
            Add New
          </h3>
          <p>Detail a new material for use</p>
        </LinkCard>

        <DeleteMaterialModal 
          material={deletingMaterial} 
          onClose={(shouldFetch: boolean) => {
            if (shouldFetch) fetchMaterials();
            setDeletingMaterial(null)
          }}  
        />
      </main>
    </div>
  )
}