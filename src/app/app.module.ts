import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {StoreModule} from '@ngrx/store';
import {UnitDetailComponent} from './components/unit/unit-detail/unit-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {InplaceModule} from 'primeng/inplace';
import {ReactiveFormsModule} from '@angular/forms';
import {UnitFormComponent} from './components/unit/unit-detail/unit-form/unit-form.component';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';
import {entityConfig} from './store/entity-metadata';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {UnitsComponent} from './components/unit/units/units.component';
import {UnitListComponent} from './components/unit/units/unit-list/unit-list.component';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {CharactersComponent} from './components/character/characters/characters.component';
import {CharacterDetailComponent} from './components/character/character-detail/character-detail.component';
import {CharacterListComponent} from './components/character/characters/character-list/character-list.component';
import {CharacterFormComponent} from './components/character/character-detail/character-form/character-form.component';
import {CommonModule} from '@angular/common';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ImageUploadModalComponent} from './components/image-upload-modal/image-upload-modal.component';
import {ImageUploadFormComponent} from './components/image-upload-modal/image-upload-form/image-upload-form.component';
import {CarouselModule} from 'primeng/carousel';


const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'units',
    pathMatch: 'full'
  },
  {
    path: 'units',
    component: UnitsComponent
  },
  {
    path: 'unit/:id',
    component: UnitDetailComponent
  },
  {
    path: 'unit',
    component: UnitDetailComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'character/:id',
    component: CharacterDetailComponent
  },
  {
    path: 'character',
    component: CharacterDetailComponent
  },
  {
    path: '**',
    redirectTo: 'units'
  },

];


const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000/',
  timeout: 3000, // request timeout
};


@NgModule({
  declarations: [
    AppComponent,
    UnitDetailComponent,
    UnitFormComponent,
    UnitsComponent,
    UnitListComponent,
    CharactersComponent,
    CharacterDetailComponent,
    CharacterListComponent,
    CharacterFormComponent,
    ImageUploadModalComponent,
    ImageUploadFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({}, {}),
    CommonModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    InputTextModule,
    InplaceModule,
    DropdownModule,
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    DataViewModule,
    PanelModule,
    CarouselModule
  ],
  providers: [
    [{provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig}]

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
