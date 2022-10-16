import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SongModel } from '../../models/song';
import { SongsStateService } from '../../state/songs-state.service';
import { SongsLayoutComponent } from './songs-layout.component';


describe('SongsComponent', () => {
  let component: SongsLayoutComponent;
  let fixture: ComponentFixture<SongsLayoutComponent>;
  let songServiceStub: jasmine.SpyObj<SongsStateService>;
  beforeEach(async () => {
    songServiceStub = jasmine.createSpyObj<SongsStateService>('SongsStateService', ['get$', 'delete'])
    await TestBed.configureTestingModule({
      declarations: [SongsLayoutComponent],
      providers: [
        { provide: SongsStateService, useValue: songServiceStub }
      ]
    })
      .compileComponents();
    const songs: SongModel[] = [{
      id: "1",
      title: "1904",
      artist: "The Tallest Man on Earth",
      year: 2012
    }];
    songServiceStub.get$.and.returnValue(of(songs));
    fixture = TestBed.createComponent(SongsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('removeSong', () => {
    const mockSong: SongModel = {
      id: "1",
      artist: 'test artist',
      year: 2020,
      title: 'test title'
    }
    it('should delete song', () => {
      component.removeSong(mockSong);
      expect(songServiceStub.delete).toHaveBeenCalledWith(mockSong);
    })
  })
});
