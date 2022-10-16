import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SongModel } from '../../models/song';

@Component({
  selector: 'app-song-upsert',
  templateUrl: './song-upsert.component.html',
  styleUrls: ['./song-upsert.component.scss']
})
export class SongUpsertComponent implements OnInit {
  @Input() set song(value: SongModel) {
    this.form = this.fb.group({
      id: [value.id],
      title: [value.title, Validators.required],
      artist: [value.artist, Validators.required],
      year: [value.year, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
    })
  }
  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter<SongModel>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get enableSubmit(): boolean {
    return this.form.valid;
  }

  cancelForm() {
    this.cancel.emit();
  }

  saveSong() {
    this.update.emit(this.form.value)
  }

}
