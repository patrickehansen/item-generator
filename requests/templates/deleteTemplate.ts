import axios from 'axios'
import config from '../../config/config'

export async function deleteTemplate(id: string): Promise<void> {
  try {
    const response = await axios.delete(`${config.baseUrl}/v1/templates/${id}`);

    return response.data;
  } catch (e) {
    console.error('requests::templates::deleteTemplate::err', e);
    throw e;
  }
}