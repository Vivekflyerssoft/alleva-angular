import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SongsComponent } from './songs/songs.component';
import { SongListComponent } from './songs/song-list/song-list.component';
import { SongUpsertComponent } from './songs/song-upsert/song-upsert.component';
import { StoreModule } from '@ngrx/store';
import { songsReducer } from './songs/state/songs.reducer';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongsComponent,
    SongListComponent,
    SongUpsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({songs: songsReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
