import axios from 'axios'
import { Material } from '../../types/material';
import config from '../../config/config'

export async function addMaterial(material: Material): Promise<Material> {
  try {
    const response = await axios.put(`${config.baseUrl}/v1/materials`, material);

    return response.data;
  } catch (e) {
    console.error('requests::materials::addMaterial::err', e);
    throw e;
  }
}