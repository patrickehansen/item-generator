export interface Material {
  MaterialID?: string;
  Name: string;
  Category: string;
  MeltingTemperature: number;
  CraftingDifficulty: number;
  Hardness: number;
  Damage: number;
  Armor: number;
  Weight: number;
}

export interface MaterialState {
  allMaterials: Material[];
  materialMap: {
    [ key: string] : Material[];
  }
}

export interface MaterialAction {
  data: Material | Material[];
  type: string;
}