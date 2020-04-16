import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CharacterService} from '../../services/Character.service';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-image-upload-modal',
  templateUrl: './image-upload-modal.component.html',
  styleUrls: ['./image-upload-modal.component.css']
})
export class ImageUploadModalComponent implements OnInit {


  model: any;
  images$: Observable<string[]>;


  constructor(private config: DynamicDialogConfig) {
  }

  ngOnInit(): void {
    this.images$ = this.config.data.images$;
  }

}
