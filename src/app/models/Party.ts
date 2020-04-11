import {Character} from './Character';
import {Unit} from './Unit';

export class Party {
  leader: Character;
  units: UnitGrouping[];

  //TODO: clan mapping?
}

class UnitGrouping {
  unit: Unit;
  quantity: number;


}
