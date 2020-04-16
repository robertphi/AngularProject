import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UnitService} from '../../../services/unit.service';
import {Observable} from 'rxjs';
import {Unit} from '../../../models/Unit';
import {ImageUploadModalComponent} from '../../image-upload-modal/image-upload-modal.component';
import {DialogService} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-unit-detail',
  providers: [DialogService],
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UnitDetailComponent implements OnInit {

  unitExists: boolean = true;

  unit$: Observable<Unit>;
  unitImages: Observable<string[]>;

  constructor(private route: ActivatedRoute, private unitService: UnitService, public dialogService: DialogService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id == null) {
      this.unitExists = false;
    } else {
      this.unit$ = this.unitService.getByKey(id);
    }

    this.unitImages = this.unitService.getUnitImages();
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

  openEditImageModal(unit: Unit) {
    this.dialogService.open(
      ImageUploadModalComponent, {
        header: 'Select an Image',
        width: '70%',
        data: {images$: this.unitImages}
      }
    );
  }

}
