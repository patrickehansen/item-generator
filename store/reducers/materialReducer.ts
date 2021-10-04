import { Material, MaterialState, MaterialAction} from '../../types/material';

const initialState: MaterialState = {
  allMaterials: [],
  materialMap: {},
  categoryMap: {},
}

export default function materialReducer(state = initialState, action: MaterialAction) {
  switch (action.type) {
    case 'setMaterials' :{
      const data = action.data as Material[];
      return {
        ...state,
        allMaterials: data,
        categoryMap: data.reduce((a, v) => {
          if (v.Category in a) {
            a[v.Category].push(v);
          } else {
            a[v.Category] = [v];
          }
          return a;
        }, {}),
        materialMap: data.reduce((a, v) => {
          a[v.MaterialID] = v;
          return a;
        }, {}),
      }
    }
    default: {
      return state;
    }
  }
}