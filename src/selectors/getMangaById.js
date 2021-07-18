
import { mangas } from '../data/MOCK_DATA';

export const getMangaById = (id) => {

    return mangas.find (manga => manga.id === id);
}
