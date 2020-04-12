import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UnitService} from '../../../services/unit.service';
import {Observable} from 'rxjs';
import {Unit} from '../../../models/Unit';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UnitDetailComponent implements OnInit {

  unitExists: boolean = true;

  unit$: Observable<Unit>;

  constructor(private route: ActivatedRoute, private unitService: UnitService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id == null) {
      this.unitExists = false;
    } else {
      this.unit$ = this.unitService.getByKey(id);
    }

  }

  saveUnitDetails(unit: Unit) {
    //TODO: there's an upsert, but didn't seem to work...why?
    if (unit._id != null) {
      this.unitService.update(unit);
    } else {
      this.unitService.add(unit);
    }

  }

  deleteUnit(unit: Unit) {
    this.unitService.delete(unit);
  }
}
