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
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import styles from '../../styles/shared.module.scss'

interface Props {
  list: Array<any>;
  onDelete: {
    (row: any): any
  }
}

export default function TemplateList({list, onDelete}: Props): JSX.Element {
  const showTime = list.every(v => v.ProductionTime);
  list.sort((a, b) => {
    if (a.Type < b.Type) return -1;
    if (a.Type > b.Type) return 1;

    return 0;
  })

  async function onDeleteTemplate(event, row) {
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
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Base Dice</TableCell>
            <TableCell align="right">Handedness</TableCell>
            <TableCell align="right">Size</TableCell>
            {showTime && <TableCell align="right">Production Time</TableCell>}
            <TableCell align="right">Use</TableCell>
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
              <Link href={`/templates/${row.TemplateID}`}>
                <TableCell component="th" scope="row">
                  <strong>{row.Name}</strong>
                </TableCell>
              </Link>
              <TableCell align="right">{row.Type}</TableCell>
              <TableCell align="right">{row.BaseDice}</TableCell>
              <TableCell align="right">{row.Handedness}</TableCell>
              <TableCell align="right">{row.Size}</TableCell>
              {showTime && <TableCell align="right">{row.ProductionTime}</TableCell>}
              <TableCell align="right"><Link href={`/templates/${row.TemplateID}/generate`}><LibraryAddIcon /></Link></TableCell>
              <TableCell align="right"><DeleteForeverIcon className={styles.delete} onClick={(e) => onDeleteTemplate(e, row)} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
