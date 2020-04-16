import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Character} from '../../../models/Character';
import {CharacterService} from '../../../services/Character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters$: Observable<Character[]>;

  constructor(private characterService: CharacterService, private router: Router) {
    this.characters$ = this.characterService.entities$;

  }

  ngOnInit(): void {
    this.characterService.getAll();
  }

  navigateToCharacter(character: Character) {
    this.router.navigate(['character/' + character._id]);
  }

  addNewCharacter() {
    this.router.navigate(['character']);
  }

  deleteCharacter(character: Character) {
    this.characterService.delete(character);

  }
}
