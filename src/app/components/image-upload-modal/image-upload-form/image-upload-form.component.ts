import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-image-upload-form',
  templateUrl: './image-upload-form.component.html',
  styleUrls: ['./image-upload-form.component.css']
})
export class ImageUploadFormComponent implements OnInit {

  @Input()
  images: string[];

  form: FormGroup = this.fb.group({
    image: ['', Validators.required],
  });


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  uploadImage() {

  }
}
