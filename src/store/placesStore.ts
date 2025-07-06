import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
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
  devtools(
    persist(
      (set, get) => ({
        history: [],
        selectedPlace: null,

        addToHistory: (place) =>
          set((state) => {
            const newHistory = [
              place,
              ...state.history.filter((item) => item.place_id !== place.place_id),
            ].slice(0, 10);
            return { history: newHistory };
          }, false, 'addToHistory'),

        setSelectedPlace: (place) =>
          set({ selectedPlace: place }, false, 'setSelectedPlace'),

        clearHistory: () =>
          set({ history: [] }, false, 'clearHistory'),
      }),
      {
        name: 'places-storage',
        getStorage: () => AsyncStorage,
        partialize: (state) => ({
          history: state.history, 
        }),
      }
    ),
    {
      name: 'PlacesStore',
    }
  )
);