// import { Injectable } from '@angular/core';
// import {DefaultDataService, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, HttpUrlGenerator} from '@ngrx/data';
// import {Unit} from '../models/Unit';
// import {HttpClient} from '@angular/common/http';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class UnitService extends DefaultDataService<Unit>{
//
//   constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator ) {
//     super('Unit', http, httpUrlGenerator);
//     // super('Unit', serviceElementsFactory);
//   }
//
//
//
//
//
// }


import {Injectable} from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {Unit} from '../models/Unit';

@Injectable({providedIn: 'root'})
export class UnitService extends EntityCollectionServiceBase<Unit> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Unit', serviceElementsFactory);
  }
}
