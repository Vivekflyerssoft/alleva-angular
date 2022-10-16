import { Component, OnInit } from '@angular/core';
import { SongModel } from './models/song';
import { SongsStateService } from './songs-state.service';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  songs: SongModel[] = [];
  song!: SongModel;
  isCreate: boolean = false;
  isUpdate: boolean = false;

  constructor(private songsService: SongsStateService) {
  }

  ngOnInit(): void {
    this.songsService.get$().subscribe(songs => {
      this.songs = songs
    });
  }

  showCreateSong() {
    this.isCreate = true;
    this.isUpdate = false;
    this.resetSong();
  }

  saveForm(song: SongModel) {
    if (song.id) {
      this.songsService.update(song)
      alert('Song updated.')
    } else {
      this.songsService.create(song)
      alert('Song created.')
    }
    this.closeUpsert();
  }

  removeSong(song: SongModel) {
    this.songsService.delete(song);
    alert('Song removed.');
  }

  showUpdateSong(song: SongModel) {
    this.isCreate = false;
    this.isUpdate = true;
    this.song = { ...song };
  }

  closeUpsert() {
    this.isCreate = false;
    this.isUpdate = false;
    this.resetSong();
  }

  private resetSong() {
    this.song = {
      artist: '',
      title: '',
      year: undefined
    };
  }
}
