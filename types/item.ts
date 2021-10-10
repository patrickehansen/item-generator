export interface Item {
  ItemID?: string;
  Name: string;
  Category: string;
  Type: string;
  Damage: string;
}

export interface Mitigation {
  Type: number;
  Value: number;
}

export interface ItemState {
  allItems: Item[];
  itemMap: {
    [ key: string] : Item;
  }
  categoryMap: {
    [ key: string] : Item[];
  }
}

export interface ItemAction {
  data: Item | Item[];
  type: string;
}