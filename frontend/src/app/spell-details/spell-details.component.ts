import { Component, OnInit } from '@angular/core';
import { Spell, SpellService } from '../spell.service';

@Component({
  selector: 'app-spell-details',
  templateUrl: './spell-details.component.html',
  styleUrls: ['./spell-details.component.css']
})
export class SpellDetailsComponent implements OnInit {

  public spell: Spell;


  constructor(private spellService: SpellService) {
    this.spell={name:"zorro"}as Spell;
  }


  async ngOnInit(): Promise<void> {
    const s = await this.spellService.getSpell("acid-arrow");
    if(s !==null && s !== undefined)
    {
      this.spell= s as Spell;
    }
  }

}
