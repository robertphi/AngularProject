import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CharacterService} from '../../services/Character.service';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-image-upload-modal',
  templateUrl: './image-upload-modal.component.html',
  styleUrls: ['./image-upload-modal.component.css']
})
export class ImageUploadModalComponent implements OnInit {


  model: any;
  images$: Observable<string[]>;


  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef) {
  }

  ngOnInit(): void {
    this.images$ = this.config.data.images$;
  }

  selectImage(imageUrl: string) {
    this.ref.close(imageUrl);
  }
}
