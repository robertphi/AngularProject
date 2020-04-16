import {Injectable} from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {Character} from '../models/Character';

@Injectable({providedIn: 'root'})
export class CharacterService extends EntityCollectionServiceBase<Character> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Character', serviceElementsFactory);
  }
}
