import axios from 'axios'
import { Material } from '../../types/material';
import config from '../../config/config'

export async function getTemplates(): Promise<Array<Material>> {
  try {
    const response = await axios.get(`${config.baseUrl}/v1/templates`);

    return response.data;
  } catch (e) {
    console.error('requests::templates::getTemplates::err', e);
    throw e;
  }
}