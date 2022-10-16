import * as store from '@ngrx/store';
import { props } from '@ngrx/store';
import { SongModel } from '../models/song';

export const create = store.createAction('[Songs Component] Create', props<SongModel>());
export const update = store.createAction('[Songs Component] Update', props<SongModel>());
export const remove = store.createAction('[Songs Component] Remove', props<SongModel>());