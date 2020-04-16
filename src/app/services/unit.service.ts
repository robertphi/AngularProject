import {Injectable} from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {Unit} from '../models/Unit';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UnitService extends EntityCollectionServiceBase<Unit> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Unit', serviceElementsFactory);
  }


  getUnitImages(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/unit-image-list');
  }

}
