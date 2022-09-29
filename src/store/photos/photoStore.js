import { writable, get } from 'svelte/store';

export const loading = writable(true);

const initialPhotos = writable([]);

const createPhotoStore = () => {
  const { subscribe, set, update } = writable([]);
  const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  return {
    subscribe,
    loadPhotos: async (albumId) => {
      try {
        // INITIALIZE
        loading.set(true);
        set([]);

        const response = await fetch(apiUrl);
        const newData = await response.json();
        const filteredPhotos = newData.filter((photo) => photo.albumId === +albumId);
        if (filteredPhotos.length) {
          set(newData.slice(0, 10));
          initialPhotos.set(newData.slice(0, 10));
        }
      } catch (err) {
        console.log(err);
      } finally {
        loading.set(false);
      }
    },
    filterPhotos: (query) => {
      const currentPhotos = get(initialPhotos);

      const filteredPhotos = currentPhotos.filter((photo) => photo.title.toLowerCase().includes(query.toLowerCase()));

      set(filteredPhotos);
    },
    addPhotos: (newPhoto) => {
      update((currentPhotos) => {
        return [newPhoto, ...currentPhotos];
      });

      // UPDATE INITIAL PhotoS ARRAY
      initialPhotos.update((currentPhotos) => {
        return [newPhoto, ...currentPhotos];
      });
    },
    deletePhotos: (photoId) => {
      const currentPhotos = get(photos);

      update((currentPhotos) => {
        return currentPhotos.filter((photo) => photo.id !== photoId);
      });
    },
  };
};

export const photos = createPhotoStore();
