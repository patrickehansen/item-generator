import { MaterialState } from './material';
import { TemplateState } from './template';

export interface RootState { 
  materials: MaterialState,
  templates: TemplateState,
}