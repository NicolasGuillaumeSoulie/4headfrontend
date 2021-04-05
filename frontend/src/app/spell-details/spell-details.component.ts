import { Component, OnInit } from '@angular/core';
import { Spell, SpellService } from '../spell.service';

@Component({
  selector: 'app-spell-details',
  templateUrl: './spell-details.component.html',
  styleUrls: ['./spell-details.component.css']
})
export class SpellDetailsComponent implements OnInit {

  private spell: Spell | null | undefined;


  constructor(private spellService: SpellService) {



  }

  async ngOnInit(): Promise<void> {
    this.spell = await this.spellService.getSpell("acid-arrow");
  }

}
