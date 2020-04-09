export class Unit {
  name: string;
  battlePower: Number;
  unitType: UnitType;
}

export enum UnitType {
  INFANTRY = 'Infantry',
  CALVARY = 'Calvary',
  ARCHER = 'Archer'
}
