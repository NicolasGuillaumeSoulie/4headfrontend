import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { SpellDetailsComponent } from './spell-details/spell-details.component';
import { SpellListComponent } from './spell-list/spell-list.component';

const routes: Routes = [
  {path: 'Charactersheet', component: CharacterSheetComponent},
  {path: 'Spelllist', component: SpellListComponent},
  {path: 'Spelldetails/:id', component: SpellDetailsComponent},
  {path: "", component: CharacterSheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
