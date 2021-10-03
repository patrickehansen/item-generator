import axios from 'axios'
import { Material } from '../../types/material';
import config from '../../config/config'

export async function editMaterial(id: string, newValues: Material): Promise<Material> {
  try {
    const response = await axios.patch(`${config.baseUrl}/v1/materials/${id}`, newValues);

    return response.data;
  } catch (e) {
    console.error('requests::materials::editMaterial::err', e);
    throw e;
  }
}