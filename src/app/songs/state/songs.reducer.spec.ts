import { create, remove, update } from "./songs.action";
import { initialState, songsReducer } from "./songs.reducer";

describe('song reducer', () => {

    describe('remove', () => {
        it('should remove song', () => {
            const actual = songsReducer(initialState, remove({
                "id": "1",
                "title": "1904",
                "artist": "The Tallest Man on Earth",
                "year": 2012
            }))

            expect(actual.find(x => x.id == "1")).toBeUndefined();
        });
    });

    describe('create', () => {
        it('should create song', () => {
            const actual = songsReducer(initialState, create({
                "id": "",
                "title": "test-title",
                "artist": "test-artist",
                "year": 2012
            }));

            const createdSong = actual.find(x => x.title == "test-title");
            expect(createdSong).toBeDefined();
            expect(createdSong?.id).not.toBe('')
        });
    });

    describe('update', () => {
        it('should update song', () => {
            const actual = songsReducer(initialState, update({
                "id": "1",
                "title": "2022",
                "artist": "The Tallest Man on Earth",
                "year": 2012
            }));
            expect(actual.find(x => x.id == "1")?.year).toBe(2012);
        });
    });
});