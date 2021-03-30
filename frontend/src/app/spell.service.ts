import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


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

  async getSpellList(classes: string[]) {
    this.spellList = [] as Spell[];
    classes.forEach(async element => {
      try {
        const a = await this.httpClient.get<{ count: number, results: Spell[] }>('https://www.dnd5eapi.co/api/classes/' + element + '/spells/').toPromise();
        var results = a.results
        this.spellList = this.spellList.concat(results);//.filter((spell) => this.spellList.indexOf(spell) < 0));
        //console.log(a.results);
        console.log(this.spellList);
      } catch (err) {
        if (err instanceof HttpErrorResponse && err.status === 403) this.spellList = [];
        else throw err;
      }
    });    console.log(this.spellList);

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