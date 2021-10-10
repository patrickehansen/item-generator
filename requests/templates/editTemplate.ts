import axios from 'axios'
import config from '../../config/config'
import { ItemTemplate } from '../../types/template';

export async function editTemplate(id: string, newValues: ItemTemplate): Promise<void> {
  try {
    const response = await axios.patch(`${config.baseUrl}/v1/templates/${id}`, newValues);

    return response.data;
  } catch (e) {
    console.error('requests::templates::editTemplate::err', e);
    throw e;
  }
}