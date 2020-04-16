import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from '../../../../models/Character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  @Input()
  characters: Character[];

  @Output()
  selectCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  @Output()
  addNewCharacterEmitter: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  deleteCharacterEmitter: EventEmitter<Character> = new EventEmitter<Character>();

  constructor() {
  }

  ngOnInit(): void {
  }

  clickCharacter(Character: Character) {
    this.selectCharacter.emit(Character);
  }

  addNewCharacter() {
    this.addNewCharacterEmitter.emit();

  }

  deleteCharacter(Character: Character) {
    this.deleteCharacterEmitter.emit(Character);
  }
}
