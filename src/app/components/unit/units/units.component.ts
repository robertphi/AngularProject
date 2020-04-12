import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Unit} from '../../../models/Unit';
import {UnitService} from '../../../services/unit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  units$: Observable<Unit[]>;

  constructor(private unitService: UnitService, private router: Router) {
    this.units$ = this.unitService.entities$;

  }

  ngOnInit(): void {
    this.unitService.getAll();
  }

  navigateToUnit(unit: Unit) {
    this.router.navigate(['unit/' + unit._id]);
  }

  addNewUnit() {
    this.router.navigate(['unit']);
  }

  deleteUnit(unit: Unit) {
    this.unitService.delete(unit);

  }
}
