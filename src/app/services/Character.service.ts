import {Injectable} from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {Character} from '../models/Character';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CharacterService extends EntityCollectionServiceBase<Character> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Character', serviceElementsFactory);
  }


  getCharacterImages(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/character-image-list');
  }

}
