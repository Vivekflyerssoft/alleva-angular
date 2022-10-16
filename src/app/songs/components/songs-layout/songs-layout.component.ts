import { Component, OnInit } from '@angular/core';
import { SongModel } from '../../models/song';
import { SongsStateService } from '../../state/songs-state.service';


@Component({
  selector: 'app-songs-layout',
  templateUrl: './songs-layout.component.html',
  styleUrls: ['./songs-layout.component.scss']
})
export class SongsLayoutComponent implements OnInit {
  songs: SongModel[] = [];
  song!: SongModel;
  isCreate: boolean = false;
  isUpdate: boolean = false;

  constructor(private songsStateService: SongsStateService) {
  }

  ngOnInit(): void {
    this.songsStateService.get$().subscribe(songs => {
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
      this.songsStateService.update(song)
      alert('Song updated.')
    } else {
      this.songsStateService.create(song)
      alert('Song created.')
    }
    this.closeUpsert();
  }

  removeSong(song: SongModel) {
    this.songsStateService.delete(song);
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
      id: '',
      artist: '',
      title: '',
      year: undefined
    };
  }
}
