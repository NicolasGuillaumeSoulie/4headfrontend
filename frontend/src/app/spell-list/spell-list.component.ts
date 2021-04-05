import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { CharClass, Spell, SpellService } from '../spell.service';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {

  public spellList: Spell[] | undefined;
  public spellCount: number;
  public charClasses: CharClass[] | null | undefined;

  constructor(private spellService: SpellService, private profileService: ProfileService) {
    this.spellCount = 0;
  }

  async ngOnInit(): Promise<void> {
    this.spellList = await this.spellService.getSpellListByLevelAndName();
    this.charClasses = await this.spellService.getClasses();
    if (this.spellList !== undefined) {
      this.spellCount = this.spellList.length;
    }
  }

  AddSpell(spell: Spell){
    this.profileService.addSpell(spell);
  }

}
