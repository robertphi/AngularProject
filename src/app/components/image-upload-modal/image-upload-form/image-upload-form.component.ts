import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-image-upload-form',
  templateUrl: './image-upload-form.component.html',
  styleUrls: ['./image-upload-form.component.css']
})
export class ImageUploadFormComponent implements OnInit {

  @Input()
  images: string[];

  @Output()
  selectedImageEmit: EventEmitter<string> = new EventEmitter<string>();

  pageNumber = 0;


  uploadUrl: string = 'http://localhost:3000/upload';

  form: FormGroup = this.fb.group({
    image: ['', Validators.required],
  });


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  uploadImage() {

  }

  updateImage($event) {
    console.log($event);

    let existingFile = this.images.findIndex(imageName => {
      imageName == $event.originalEvent.body.imageUrl;
    });

    if (existingFile < 0) {
      this.images.push($event.originalEvent.body.imageUrl);
      this.pageNumber = (this.images.length - 1);
      //TODO: figure out if this is a bug in my code or PrimeNG
    } else {
      this.pageNumber = existingFile;
    }


  }

  updateItemImage() {
    this.selectedImageEmit.emit(this.images[this.pageNumber]);
  }
}
