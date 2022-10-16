import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SongModel } from '../models/song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  @Input() songs: SongModel[] = [];
  @Output() removeSong = new EventEmitter<SongModel>();
  @Output() showUpdateSong = new EventEmitter<SongModel>();

  constructor() { }

  ngOnInit(): void {
  }

  showUpdate(song: SongModel){
    this.showUpdateSong.emit(song);
  }

  remove(song: SongModel){
    this.removeSong.emit(song);
  }

}
