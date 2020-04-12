import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Unit} from '../../../../models/Unit';

@Component({
  selector: 'app-unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.css']
})
export class UnitFormComponent implements OnInit, OnChanges {


  @Input()
  editMode: boolean;

  @Input()
  unit: Unit;

  @Output()
  saveUnitDetails: EventEmitter<Unit> = new EventEmitter<Unit>();

  @Output()
  deleteUnitEmitter: EventEmitter<Unit> = new EventEmitter<Unit>();


  unitTypes = [
    {label: 'Infantry', value: 'Infantry'},
    {label: 'Ranged', value: 'Ranged'},
    {label: 'Calvary', value: 'Calvary'},
  ];


  unitForm = this.fb.group({
    _id: [null],
    name: ['', Validators.required],
    description: ['', Validators.required],
    unitType: ['', Validators.required],
    battlePower: ['', Validators.required],
    // image: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {
  }

  get name(): AbstractControl {
    return this.unitForm.get('name');
  }

  get description(): AbstractControl {
    return this.unitForm.get('description');
  }

  get battlePower(): AbstractControl {
    return this.unitForm.get('battlePower');
  }

  get unitType(): AbstractControl {
    return this.unitForm.get('unitType');
  }

  ngOnInit(): void {
  }

  saveUnitData() {
    console.log(this.unitForm.value);
    this.saveUnitDetails.emit(this.unitForm.value);
  }

  ngOnChanges(): void {
    if (this.unit != null) {
      this.unitForm.patchValue(this.unit);
    }
  }

  deleteUnit() {
    this.deleteUnitEmitter.emit(this.unit);
  }
}
