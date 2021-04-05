import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Spell, SpellService } from '../spell.service';

@Component({
  selector: 'app-spell-details',
  templateUrl: './spell-details.component.html',
  styleUrls: ['./spell-details.component.css']
})
export class SpellDetailsComponent implements OnInit {

  public spell: Spell;


  constructor(private spellService: SpellService,
    private router: ActivatedRoute) {
    this.spell = { name: "zorro" } as Spell;
  }


  async ngOnInit(): Promise<void> {
    var index = this.router.snapshot.paramMap.get('id');
    console.log(index);
    if (index !== null && index !== undefined) {
      let s = await this.spellService.getSpell(index);
      if (s !== null && s !== undefined) {
        this.spell = s as Spell;
      }
    }


  }

}
