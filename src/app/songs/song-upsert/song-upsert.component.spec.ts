import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SongUpsertComponent } from './song-upsert.component';

describe('SongUpsertComponent', () => {
  let component: SongUpsertComponent;
  let fixture: ComponentFixture<SongUpsertComponent>;
  let fbStub: jasmine.SpyObj<FormBuilder>

  beforeEach(async () => {
    fbStub = jasmine.createSpyObj(['group']);
    await TestBed.configureTestingModule({
      declarations: [SongUpsertComponent],
      imports: [ReactiveFormsModule, FormsModule],
    })
      .compileComponents();
    //fbStub.group.and.returnValue(new FormGroup([]));
    fixture = TestBed.createComponent(SongUpsertComponent);
    component = fixture.componentInstance;
    component.song = {
      id: "1",
      artist: 'test artist',
      year: "2020",
      title: 'test title'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
