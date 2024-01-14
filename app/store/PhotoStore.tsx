import { create } from "zustand";
import { RandomPhotos, searchedPhotos } from "../types";

interface PhotoStore {
  photosFromPhotoStore: RandomPhotos[] | searchedPhotos[] | null;
  setPhotosFromPhotoStore: (
    photosFromPhotoStore: RandomPhotos[] | searchedPhotos[] | null
  ) => void;
}

export const usePhotoStore = create<PhotoStore>((set) => ({
  photosFromPhotoStore: null,
  setPhotosFromPhotoStore: (photosFromPhotoStore) =>
    set({ photosFromPhotoStore }),
}));
