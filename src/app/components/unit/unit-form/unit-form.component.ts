import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Unit} from '../../../models/Unit';

@Component({
  selector: 'app-unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.css']
})
export class UnitFormComponent implements OnInit {


  @Input()
  editMode: boolean;


  unitTypes = [
    {name: 'Infantry', code: 0},
    {name: 'Ranged', code: 1},
    {name: 'Calvary', code: 2},
  ];


  unitForm = this.fb.group({
    name: ['Archer', Validators.required],
    description: ['Shoots arrows', Validators.required],
    unitType: ['', Validators.required],
    battlePower: ['10', Validators.required],
    image: ['', Validators.required]
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
  }
}
