import { MaterialState } from './material'
import { TemplateState } from './template'
import { ItemState } from './item'

export interface RootState { 
  materials: MaterialState,
  templates: TemplateState,
  items: ItemState,
}