import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Character} from '../../../models/Character';
import {ActivatedRoute} from '@angular/router';
import {CharacterService} from '../../../services/Character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  characterExists: boolean = true;

  character$: Observable<Character>;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id == null) {
      this.characterExists = false;
    } else {
      this.character$ = this.characterService.getByKey(id);
    }

  }

  saveCharacterDetails(character: Character) {
    //TODO: there's an upsert, but didn't seem to work...why?
    if (character._id != null) {
      this.characterService.update(character);
    } else {
      this.characterService.add(character);
    }

  }

  deleteCharacter(character: Character) {
    this.characterService.delete(character);
  }

}
