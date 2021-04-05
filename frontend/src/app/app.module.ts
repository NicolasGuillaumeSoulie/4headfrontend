import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { SpellDetailsComponent } from './spell-details/spell-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CharacterSheetComponent,
    SpellListComponent,
    SpellDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
