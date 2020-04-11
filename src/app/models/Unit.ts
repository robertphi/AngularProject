export class Unit {
  _id: string;
  name: string;
  description: string;
  image: any;
  battlePower: Number;
  unitType: UnitType;
}

export enum UnitType {
  INFANTRY = 'Infantry',
  CALVARY = 'Calvary',
  ARCHER = 'Archer'
}
