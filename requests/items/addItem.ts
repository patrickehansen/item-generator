import axios from 'axios'
import { Item } from '../../types/item';
import config from '../../config/config'

export async function addItem(item: Item): Promise<void> {
  try {
    const response = await axios.put(`${config.baseUrl}/v1/items`, item);

    return response.data;
  } catch (e) {
    console.error('requests::items::addItem::err', e);
    throw e;
  }
}