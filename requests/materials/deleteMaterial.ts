import axios from 'axios'
import config from '../../config/config'

export async function deleteMaterial(id: string): Promise<void> {
  try {
    const response = await axios.delete(`${config.baseUrl}/v1/materials/${id}`);

    return response.data;
  } catch (e) {
    console.error('requests::materials::deleteMaterial::err', e);
    throw e;
  }
}