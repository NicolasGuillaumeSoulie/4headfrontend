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
    service.getSpellList(['paladin','druid']);
  }

}
