import { Component } from '@angular/core';
import { Spell, SpellService } from './spell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private service: SpellService) {
    console.log(service.getSpellListByClass('paladin'));
    console.log(service.getSpellListByLevelAndName());
    console.log(service.getSpellListByLevelAndName(0, "acid"));
    console.log(service.getSpellListByLevelAndName(2));
  }

}
