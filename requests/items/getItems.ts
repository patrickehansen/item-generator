import axios from 'axios'
import { Item } from '../../types/item';
import config from '../../config/config'

export async function getItems(): Promise<Array<Item>> {
  try {
    const response = await axios.get(`${config.baseUrl}/v1/items`);

    return response.data;
  } catch (e) {
    console.error('requests::items::getItems::err', e);
    throw e;
  }
}