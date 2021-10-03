import axios from 'axios'
import { Material } from '../../types/material';
import config from '../../config/config'

export async function getMaterials(): Promise<Array<Material>> {
  try {
    const response = await axios.get(`${config.baseUrl}/v1/materials`);

    return response.data;
  } catch (e) {
    console.error('requests::materials::getMaterials::err', e);
    throw e;
  }
}