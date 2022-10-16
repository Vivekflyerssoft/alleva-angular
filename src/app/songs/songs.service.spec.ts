import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { SongModel } from './models/song';
import { SongsStateService } from './songs-state.service';


describe('SongsService', () => {
  let service: SongsStateService;
  let storeStub: jasmine.SpyObj<Store<{ songs: SongModel[] }>>;

  beforeEach(() => {
    storeStub = jasmine.createSpyObj<Store<{ songs: SongModel[] }>>('Store', ['select', 'dispatch']);
    TestBed.configureTestingModule({
      providers: [
        { provide: Store<{ songs: SongModel[] }>, useValue: storeStub }
      ]
    });
    service = TestBed.inject(SongsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
