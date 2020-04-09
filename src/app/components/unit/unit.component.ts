import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UnitComponent implements OnInit {

  editName: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
