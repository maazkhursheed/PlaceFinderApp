import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Place } from '../types';

interface PlacesState {
  history: Place[];
  selectedPlace: Place | null;
  addToHistory: (place: Place) => void;
  setSelectedPlace: (place: Place | null) => void;
  clearHistory: () => void;
}

export const usePlacesStore = create<PlacesState>()(
  persist(
    (set) => ({
      history: [],
      selectedPlace: null,
      addToHistory: (place) => set((state) => {
        const newHistory = [
          place,
          ...state.history.filter(item => item.place_id !== place.place_id),
        ].slice(0, 10);
        return { history: newHistory };
      }),
      setSelectedPlace: (place) => set({ selectedPlace: place }),
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: 'places-storage',
      getStorage: () => AsyncStorage,
    }
  )
);