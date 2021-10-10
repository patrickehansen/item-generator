import { ItemTemplate, TemplateState, TemplateAction} from '../../types/template';

const initialState: TemplateState = {
  allTemplates: [],
  templateMap: {},
  categoryMap: {},
}

export default function materialReducer(state = initialState, action: TemplateAction) {
  switch (action.type) {
    case 'setTemplates' :{
      const data = action.data as ItemTemplate[];
      return {
        ...state,
        allTemplates: data,
        categoryMap: data.reduce((a, v) => {
          if (v.Category in a) {
            a[v.Category].push(v);
          } else {
            a[v.Category] = [v];
          }
          return a;
        }, {}),
        templateMap: data.reduce((a, v) => {
          a[v.TemplateID] = v;
          return a;
        }, {}),
      }
    }
    default: {
      return state;
    }
  }
}