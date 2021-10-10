import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import AssignmentIcon from '@mui/icons-material/Assignment'
import styles from '../../styles/shared.module.scss'

interface Props {
  list: Array<any>;
}

export default function ItemList({list}: Props): JSX.Element {
  list.sort((a, b) => {
    if (a.Type < b.Type) return -1;
    if (a.Type > b.Type) return 1;

    return 0;
  })

  async function copyToClipboard(event, row) {
    event.preventDefault();
    navigator.clipboard.writeText(`${row.Name}\t${row.Damage}`)
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
            <TableCell align="right">Damage</TableCell>
            <TableCell align="right">Copy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className={styles.link}
            >
              <TableCell component="th" scope="row">
                <strong>{row.Name}</strong>
              </TableCell>
              <TableCell align="right">{row.Type}</TableCell>
              <TableCell align="right">{row.Damage}</TableCell>
              <TableCell align="right"><AssignmentIcon onClick={(e) => copyToClipboard(e, row)} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
