import React from 'react';
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import SearchBar from '../components/search/SearchBar';
import MapViewComponent from '../components/map/MapView';
import { usePlacesStore } from '../store/placesStore';

const SearchScreen = () => {
  const selectedPlace = usePlacesStore(state => state.selectedPlace);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.mapContainer}>
          <MapViewComponent
            location={selectedPlace?.location}
            name={selectedPlace?.name}
            address={selectedPlace?.address}
          />
        </View>

        <View style={styles.searchBarContainer}>
          <SearchBar />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  searchBarContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    zIndex: 20,
    elevation: 4,
  },
});

export default SearchScreen;