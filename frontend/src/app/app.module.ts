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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CharacterSheetComponent,
    SpellListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatToolbarModule
=======
    HttpClientModule
>>>>>>> e4a27b03398d17c24a1a8164ce3da20543e76218
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
