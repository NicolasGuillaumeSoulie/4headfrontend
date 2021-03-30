import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface Spell { 
  index: string, 
  name: string }

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private mySpell: Spell | null | undefined;

  constructor(private httpClient: HttpClient) { }

  async resolve() {
    if (typeof this.mySpell !== 'undefined') return this.mySpell;

    try {
      this.mySpell = await this.httpClient.get('https://www.dnd5eapi.co/api/spells/acid-arrow').toPromise() as Spell;
      console.log("spell name: " + this.mySpell.name);
      console.log(this.mySpell);
    } catch (err) {
      if (err instanceof HttpErrorResponse && err.status === 403) this.mySpell = null;
      else throw err;
    }

    return this.mySpell;
  }

}
