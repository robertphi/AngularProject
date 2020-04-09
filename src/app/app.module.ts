import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {StoreModule} from '@ngrx/store';
import {UnitComponent} from './components/unit/unit.component';
import {RouterModule, Routes} from '@angular/router';


const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'createUnit',
    pathMatch: 'full'
  },
  {
    path: 'unit',
    component: UnitComponent
  },
  {
    path: 'createUnit',
    component: UnitComponent
  },
  {
    path: '**',
    redirectTo: 'createUnit'
  },

];


@NgModule({
  declarations: [
    AppComponent,
    UnitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
