import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { CharClass, SpellService } from '../spell.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  classdd: CharClass[] | null | undefined;

  constructor(private spellService: SpellService, private profileService: ProfileService) { 
  } 

  ngOnInit(): void {
    this.RetrieveData();
  }
  async RetrieveData() {
    this.classdd = await this.spellService.getClasses();
  }

  

}


