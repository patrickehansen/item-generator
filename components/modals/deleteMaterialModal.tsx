import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal';
import { deleteMaterial } from '../../requests/materials/deleteMaterial';
import { Material } from '../../types/material';
import style from '../../styles/modal.module.scss'
import sharedStyle from '../../styles/shared.module.scss'

interface Props {
  material: Material;
  onClose: {
    (changed: boolean):void;
  }
}

export function DeleteMaterialModal({material, onClose}: Props): JSX.Element {
  async function confirmDelete() {
    await deleteMaterial(material.MaterialID);

    onClose(true);
  }

  return (
    <Modal
      open={!!material}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={style.modal}>
        <h4>Are you sure?</h4>
        <p>Deleting material: {material ? material.Name : ''} is irreversible.</p>
        <p>Are you sure you want to do this?</p>
        <div style={{height: '15px'}} />
        <Button onClick={(e) => onClose(false)} className={`${sharedStyle.pullLeft}`} variant="contained" color='error'>
          CANCEL
        </Button>
        <Button onClick={confirmDelete} className={sharedStyle.pullRight} variant="contained">
          YES
        </Button>
      </Box>
    </Modal>
  );
}