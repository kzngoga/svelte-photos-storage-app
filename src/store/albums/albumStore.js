import { writable, get } from 'svelte/store';

export const loading = writable(true);

const initialAlbums = writable([]);

const createAlbumStore = () => {
  const { subscribe, set, update } = writable([]);
  const apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  return {
    subscribe,
    loadAlbums: async () => {
      try {
        const response = await fetch(apiUrl);
        const newData = await response.json();
        set(newData.slice(0, 10));
        initialAlbums.set(newData.slice(0, 10));
      } catch (err) {
        console.log(err);
      } finally {
        loading.set(false);
      }
    },
    filterAlbums: (query) => {
      const currentAlbums = get(initialAlbums);

      const filteredAlbums = currentAlbums.filter((album) => album.title.toLowerCase().includes(query.toLowerCase()));

      set(filteredAlbums);
    },
    addAlbums: (newAlbum) => {
      update((currentAlbums) => {
        return [newAlbum, ...currentAlbums];
      });

      // UPDATE INITIAL ALBUMS ARRAY
      initialAlbums.update((currentAlbums) => {
        return [newAlbum, ...currentAlbums];
      });
    },
  };
};

export const albums = createAlbumStore();
