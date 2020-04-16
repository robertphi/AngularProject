import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Character} from '../../../../models/Character';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit, OnChanges {


  @Input()
  editMode: boolean;

  @Input()
  character: Character;

  @Output()
  saveCharacterDetails: EventEmitter<Character> = new EventEmitter<Character>();

  @Output()
  deleteCharacterEmitter: EventEmitter<Character> = new EventEmitter<Character>();


  characterForm = this.fb.group({
    _id: [null],
    name: ['', Validators.required],
    description: ['', Validators.required],
    age: ['', Validators.required],
    battlePower: ['', Validators.required],
    // image: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {
  }

  get name(): AbstractControl {
    return this.characterForm.get('name');
  }

  get description(): AbstractControl {
    return this.characterForm.get('description');
  }

  get battlePower(): AbstractControl {
    return this.characterForm.get('battlePower');
  }

  get age(): AbstractControl {
    return this.characterForm.get('age');
  }

  ngOnInit(): void {
  }

  saveCharacterData() {
    this.saveCharacterDetails.emit(this.characterForm.value);
  }

  ngOnChanges(): void {
    if (this.character != null) {
      this.characterForm.patchValue(this.character);
    }
  }

  deleteCharacter() {
    this.deleteCharacterEmitter.emit(this.character);
  }
}
