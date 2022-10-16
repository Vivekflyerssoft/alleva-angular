import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SongModel } from './models/song';
import { create, remove, update } from './state/songs.action';

@Injectable({
  providedIn: 'root'
})
export class SongsStateService {
  songDatabase$: Observable<SongModel[]>;

  constructor(private store: Store<{ songs: SongModel[] }>) {
    this.songDatabase$ = store.select('songs')
  }

  get$() {
    return this.songDatabase$;
  };

  create(song: SongModel) {
    this.store.dispatch(create(song))
  };

  update = (song: SongModel) => {
    this.store.dispatch(update(song))
  };

  delete = (song: SongModel) => {
    this.store.dispatch(remove(song));
  };
}