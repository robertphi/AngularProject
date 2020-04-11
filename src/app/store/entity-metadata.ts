import {EntityMetadataMap} from '@ngrx/data';
import {Unit} from '../models/Unit';

const entityMetadata: EntityMetadataMap = {
  Unit: {
    selectId: (unit: Unit) => unit._id
  },
};

const pluralNames = {Unit: 'Units'};

export const entityConfig = {
  entityMetadata,
  pluralNames
};


