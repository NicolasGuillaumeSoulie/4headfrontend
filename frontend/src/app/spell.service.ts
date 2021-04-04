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

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private mySpell: Spell | null | undefined;
  private spellList: Spell[];

  constructor(private httpClient: HttpClient) {
    this.spellList = [] as Spell[];
  }

  async getSpell(index: string) {
    if (typeof this.mySpell !== 'undefined') return this.mySpell;

    try {
      this.mySpell = await this.httpClient.get<Spell>('https://www.dnd5eapi.co/api/spells/' + index).toPromise() as Spell;
      console.log("spell name: " + this.mySpell.name);
      console.log(this.mySpell);
      console.log(this.mySpell.name);
      console.log(this.mySpell.desc);
    } catch (err) {
      if (err instanceof HttpErrorResponse && err.status === 403) this.mySpell = null;
      else throw err;
    }

    return this.mySpell;
  }

  async getSpellListByClass(charClass: string) {
    this.spellList = [] as Spell[];
    try {
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

    try {
      // Send request
      const a = await this.httpClient.get<{ count: number, results: Spell[] }>('https://www.dnd5eapi.co/api/spells/', { params: params }).toPromise();
      // Get response
      this.spellList = a.results
    } catch (err) {
      if (err instanceof HttpErrorResponse && err.status === 403) this.spellList = [];
      else throw err;
    }
    console.log(this.spellList);

    return this.spellList;
  }


  /*
    private async updateSpellList(classes: string[], callback: Callback) {
      return new Promise((resolve: PromiseResolve<Spell[]>, reject: PromiseReject): void => {
  
        
      });
    }
  }
  
  type PromiseResolve<T> = (value?: T | PromiseLike<T>) => void;
  type PromiseReject = (error?: any) => void;
  */
}