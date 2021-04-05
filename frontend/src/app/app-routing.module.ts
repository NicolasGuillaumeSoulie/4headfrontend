import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { SpellListComponent } from './spell-list/spell-list.component';

const routes: Routes = [
  {path: 'Charactersheet', component: CharacterSheetComponent},
  {path: 'Spelllist', component: SpellListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
