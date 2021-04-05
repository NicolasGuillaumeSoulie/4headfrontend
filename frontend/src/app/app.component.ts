import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { Spell, SpellService } from './spell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private spellService: SpellService, private profileService: ProfileService) {
    this.addSpellTest()
    .then(spell => {this.profileService.addSpell(spell); return spell})
    .then(spell => this.profileService.removeSpell(spell));
    //this.profileService.setName("Z");
    //this.profileService.addClass({index: "bard", level: 0});
    //this.profileService.removeClass("bard");
  }

  async addSpellTest(){
    const spell = await this.spellService.getSpell("acid-arrow");
    return spell;
  }
}
