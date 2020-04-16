import {EntityMetadataMap} from '@ngrx/data';
import {Unit} from '../models/Unit';
import {Character} from '../models/Character';

const entityMetadata: EntityMetadataMap = {
  Unit: {
    selectId: (unit: Unit) => unit._id
  },
  Character: {
    selectId: (character: Character) => character._id
  }
};

const pluralNames = {Unit: 'Units', Character: 'Characters'};

export const entityConfig = {
  entityMetadata,
  pluralNames
};


