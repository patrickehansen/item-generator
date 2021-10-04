import React from 'react';
import Link from 'next/link'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteMaterial } from '../../requests/materials/deleteMaterial';
import styles from '../../styles/shared.module.scss'

interface Props {
  list: Array<any>;
  onDelete: {
    (row: any): any
  }
}

const difficulties = [
  'Trivial',
  'Easy',
  'Moderate',
  'Somewhat Hard',
  'Hard',
  'Very Hard',
  'Extremely Hard',
  'GLHF',
]



export default function MaterialList({list, onDelete}: Props): JSX.Element {
  const showTemp = list.every(v => v.MeltingTemperature !== null);
  list.sort((a, b) => {
    if (a.CraftingDifficulty < b.CraftingDifficulty) return -1;
    if (a.CraftingDifficulty > b.CraftingDifficulty) return 1;

    return 0;
  })

  async function onDeleteMaterial(event, row) {
    event.preventDefault();
    onDelete(row);
  }

  return (
    <TableContainer component={Paper}>
      <Table 
        sx={{ minWidth: 650 }}
        className={styles.table}
      >
        <TableHead className={styles.tableHeader}>
          <TableRow>
            <TableCell>Name</TableCell>
            { showTemp && <TableCell align="right">Melt Temp(C)</TableCell> }
            <TableCell align="right">Crafting Difficulty</TableCell>
            <TableCell align="right">Hardness</TableCell>
            <TableCell align="right">Damage</TableCell>
            <TableCell align="right">Armor</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row, i) => (
            
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className={styles.link}
              >
                <Link href={`/materials/${row.MaterialID}`}>
                  <TableCell component="th" scope="row">
                    <strong>{row.Name}</strong>
                  </TableCell>
                </Link>
                { showTemp && <TableCell align="right">{row.MeltingTemperature}</TableCell> }
                <TableCell align="right">{difficulties[row.CraftingDifficulty]}</TableCell>
                <TableCell align="right">{row.Hardness}</TableCell>
                <TableCell align="right">{row.Damage}</TableCell>
                <TableCell align="right">{row.Armor}</TableCell>
                <TableCell align="right">{row.Weight}</TableCell>
                <TableCell align="right"><DeleteForeverIcon className={styles.delete} onClick={(e) => onDeleteMaterial(e, row)} /></TableCell>
              </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
