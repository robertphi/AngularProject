import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UnitService} from '../../services/unit.service';
import {Observable} from 'rxjs';
import {Unit} from '../../models/Unit';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UnitComponent implements OnInit {


  unit$: Observable<Unit>;

  constructor(private route: ActivatedRoute, private unitService: UnitService) {


  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.unit$ = this.unitService.getByKey(id);
  }

}
