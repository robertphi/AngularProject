import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Unit} from '../../../../models/Unit';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

  @Input()
  units: Unit[];

  @Output()
  selectUnit: EventEmitter<Unit> = new EventEmitter<Unit>();

  constructor() {
  }

  ngOnInit(): void {
  }

  clickUnit(unit: Unit) {
    this.selectUnit.emit(unit);
  }
}
