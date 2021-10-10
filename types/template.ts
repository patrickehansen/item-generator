export interface ItemTemplateRequirement {
  Type: string;
  Count: number;
}

export interface ItemTemplate {
  TemplateID?: string;
  Name: string;
  Category: string;
  Type: string;
  BaseDice: string;
  Handedness: string;
  Size: string;
  ProductionTime: string;
  Requirements: ItemTemplateRequirement[];
}

export interface TemplateState {
  allTemplates: ItemTemplate[];
  templateMap: {
    [ key: string] : ItemTemplate;
  }
  categoryMap: {
    [ key: string] : ItemTemplate[];
  }
}

export interface TemplateAction {
  data: ItemTemplate | ItemTemplate[];
  type: string;
}