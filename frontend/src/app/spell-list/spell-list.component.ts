import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  // Search filter variables
  public charClass: string | undefined;
  public search: string;
  public level: number | undefined;

  constructor(private spellService: SpellService,
    private profileService: ProfileService,
    private router: Router) {
    this.spellCount = 0;
    this.search = "";
  }

  async ngOnInit(): Promise<void> {
    this.charClasses = await this.spellService.getClasses();
    this.getSpell();
  }


  async getSpell() {
    if (this.charClass === undefined) {
      this.spellList = await this.spellService.getSpellListByLevelAndName();
    }
    else {
      this.spellList = await this.spellService.getSpellListByClass(this.charClass);
    }

    if (this.spellList !== undefined) {
      this.spellCount = this.spellList.length;
    }
  }

  async onChangeClass(newClass: { value: string | undefined; }) {
    this.charClass = newClass.value;
    this.getSpell();
  }

  GoToDetails(index: string) {
    this.router.navigate(["/Spelldetails"], {state: {data:{index: index}}});
  }

  AddSpell(spell: Spell) {
    this.profileService.addSpell(spell);
  }

}
