import { Injectable } from '@angular/core';
import { Spell } from './spell.service';

export interface Profile {
  name: string,
  classes: {
    index: string,
    level: number
  }[]
  spellList: Spell[]
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profile: Profile | null | undefined;

  constructor() {
    this.profile = { name: "myProfile", classes: [], spellList: [] };
    this.loadProfile();
  }

  setName(name: string) {
    if (this.profile !== null && this.profile !== undefined) {
      this.profile.name = name;
    }
    this.saveProfile();
  }

  getName() {
    return this.profile?.name;
  }

  addSpell(spell: Spell | null) {
    if (spell !== null) {
      this.profile?.spellList.push(spell);
      this.saveProfile();
    }
  }

  removeSpell(spell: Spell | null) {
    if (this.profile?.spellList === undefined || spell === null) return;
    // Use a filter to remove the spell. Use the spell index to recognise a spell
    this.profile.spellList = this.profile.spellList.filter(item => item.index != spell.index);
    this.saveProfile();
  }

  getSpells(){
    return this.profile?.spellList;
  }

  addClass(charClass: {index: string, level: number}){
    this.removeClass(charClass.index);
    this.profile?.classes.push(charClass);
    this.saveProfile();
  }

  removeClass(classIndex: string){
    if(this.profile?.classes === undefined) return;
    this.profile.classes = this.profile.classes.filter(item => item.index !== classIndex);
    this.saveProfile();
  }

  getClasses(){
    return this.profile?.classes;
  }

  saveProfile() {
    // Save the profile in localstorage
    localStorage.setItem("profile", JSON.stringify(this.profile));
    console.log(this.profile);
  }

  loadProfile() {
    // Load profile from localstorage
    let jsonString = localStorage.getItem("profile")
    // If the profil exist (not null) then load it into the profile attribut
    if (jsonString !== null) {
      this.profile = JSON.parse(jsonString);
    }
    return this.profile;
  }


}
