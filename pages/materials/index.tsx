import Link from 'next/link'
import { useSelector, useDispatch  } from 'react-redux'
import { LinkCard, Card } from '../../components/card'
import MaterialList from './table';
import styles from '../../styles/shared.module.scss'
import testData from './testData';
import { RootState } from '../../types/store';
import { Material } from '../../types/material';

export default function Materials() {
  const materialMap = useSelector((state: RootState) => state.materials.materialMap)
  const dispatch = useDispatch();

  if (!Object.keys(materialMap).length) {
    dispatch({
      type: 'setMaterials',
      data: testData
    })
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
          Welcome to Materials
        </h1>

        {
          Object.entries(materialMap).map(([name, entries]: [string, Array<Material>], i) => (
            <Card key={i}>
              <h3>{name}s</h3>
              <MaterialList list={entries}/>
            </Card>
          ))
        }
        
        
        <LinkCard href="/materials/new">
          <h3>
            Add New
          </h3>
          <p>Detail a new material for use</p>
        </LinkCard>
      </main>
    </div>
  )
}