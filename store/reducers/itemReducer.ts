import { Item, ItemState, ItemAction} from '../../types/item';

const initialState: ItemState = {
  allItems: [],
  itemMap: {},
  categoryMap: {},
}

export default function materialReducer(state = initialState, action: ItemAction) {
  switch (action.type) {
    case 'setItems' :{
      const data = action.data as Item[];
      return {
        ...state,
        allItems: data,
        categoryMap: data.reduce((a, v) => {
          if (v.Category in a) {
            a[v.Category].push(v);
          } else {
            a[v.Category] = [v];
          }
          return a;
        }, {}),
        itemMap: data.reduce((a, v) => {
          a[v.ItemID] = v;
          return a;
        }, {}),
      }
    }
    default: {
      return state;
    }
  }
}