import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';


export interface Spell {
  index: string,
  name: string,
  desc: string[],
  higher_level: string[],
  range: string,
  components: string[],
  material: string,
  ritual: boolean,
  duration: string,
  concentration: boolean,
  casting_time: string,
  level: number,
  attack_type: string,
  url: string
}

export interface CharClass {
  index: string,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private mySpell: Spell | null | undefined;
  private spellList: Spell[];
  private charClasses: CharClass[] | null | undefined;

  constructor(private httpClient: HttpClient) {
    this.spellList = [] as Spell[];
  }

  async getSpell(index: string) {
    if (typeof this.mySpell !== 'undefined') return this.mySpell;

    try {
      // Send request & save answer
      this.mySpell = await this.httpClient.get<Spell>('https://www.dnd5eapi.co/api/spells/' + index).toPromise() as Spell;
    } catch (err) {
      if (err instanceof HttpErrorResponse && err.status === 403) this.mySpell = null;
      else throw err;
    }

    return this.mySpell;
  }

  async getSpellListByClass(charClass: string) {
    this.spellList = [] as Spell[];
    try {
      // Send request & save answer
      const a = await this.httpClient.get<{ count: number, results: Spell[] }>('https://www.dnd5eapi.co/api/classes/' + charClass + '/spells/').toPromise();
      this.spellList = a.results
    } catch (err) {
      if (err instanceof HttpErrorResponse && err.status === 403) this.spellList = [];
      else throw err;
    }
    console.log(this.spellList);

    return this.spellList;
  }

  async getSpellListByLevelAndName(spellLevel: number | null = null, nameSearch: string | null = null) {
    this.spellList = [] as Spell[];

    // Define Http params
    let params = new HttpParams();

    // Begin assigning parameters
    if (spellLevel !== null) {
      params = params.append('level', spellLevel.toString());
    }
    if (nameSearch !== null) {
      params = params.append('name', nameSearch);
    }
    console.log(params);

    try {
      // Send request & save answer
      const a = await this.httpClient.get<{ count: number, results: Spell[] }>('https://www.dnd5eapi.co/api/spells/', { params: params }).toPromise();
      this.spellList = a.results
    } catch (err) {
      if (err instanceof HttpErrorResponse && err.status === 403) this.spellList = [];
      else throw err;
    }
    console.log(this.spellList);

    return this.spellList;
  }

  async getClasses(){
    try {
      const a = await this.httpClient.get<{ count: number, results: CharClass[] }>('https://www.dnd5eapi.co/api/classes/').toPromise();
      this.charClasses = a.results;
    } catch (err) {
      if (err instanceof HttpErrorResponse && err.status === 403) this.spellList = [];
      else throw err;
    }
    console.log(this.charClasses);

    return this.charClasses;
  }
}