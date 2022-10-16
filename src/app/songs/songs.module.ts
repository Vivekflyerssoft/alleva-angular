import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';
import { SongListComponent } from './components/song-list/song-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { State } from '@ngrx/store';
import { SongsStateService } from './state/songs-state.service';
import { SongUpsertComponent } from './components/song-upsert/song-upsert.component';
import { SongsLayoutComponent } from './components/songs-layout/songs-layout.component';


@NgModule({
  declarations: [SongListComponent, SongUpsertComponent, SongsLayoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SongsRoutingModule
  ],
  providers: [SongsStateService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [SongsLayoutComponent]
})
export class SongsModule { }
