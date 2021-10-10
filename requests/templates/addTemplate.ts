import axios from 'axios'
import { ItemTemplate } from '../../types/template';
import config from '../../config/config'

export async function addTemplate(template: ItemTemplate): Promise<void> {
  try {
    const response = await axios.put(`${config.baseUrl}/v1/templates`, template);

    return response.data;
  } catch (e) {
    console.error('requests::templates::addTemplate::err', e);
    throw e;
  }
}