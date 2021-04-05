import { Component, OnInit } from '@angular/core';
import { Profile, ProfileService } from '../profile.service';
import { CharClass, SpellService } from '../spell.service';


@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  classdd: CharClass[] | null | undefined;
  profiledd: Profile | void | undefined;
  myInput: any; Number: any;
  myClass!: string;
  constructor(private spellService: SpellService, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.RetrieveData();
  }
  async RetrieveData() {
    this.classdd = await this.spellService.getClasses();
  }

  updateprofile(index: string, level: number) {
    this.profiledd = this.profileService.addClass({ index, level });
  }

  async changeClass(newClass: { value: string; }) {
    this.myClass = newClass.value;
  }

}


