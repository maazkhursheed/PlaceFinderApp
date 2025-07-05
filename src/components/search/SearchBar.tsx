import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar, ActivityIndicator } from 'react-native-paper';
import { useDebounce } from '../../hooks/useDebounce';
import { usePlaces } from '../../hooks/usePlaces';
import { usePlacesStore } from '../../store/placesStore';
import { getPlaceDetails } from '../../api/places';
import { Prediction } from '../../types';
import SearchResults from './SearchResults';
import MagnifyIcon from '../../assets/icons/magnify.svg';
import CloseIcon from '../../assets/icons/close.svg';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  const { results, loading } = usePlaces(debouncedQuery);
  const { addToHistory, setSelectedPlace } = usePlacesStore();

  const handleSelect = async (item: Prediction) => {
    setQuery('');
    const details = await getPlaceDetails(item.place_id);
    const place = {
      place_id: item.place_id,
      name: details.result.name,
      address: details.result.formatted_address,
      location: details.result.geometry.location,
    };
    setSelectedPlace(place);
    addToHistory(place);
  };

  return (
    <View>
      <Searchbar
        placeholder="Search places"
        value={query}
        onChangeText={setQuery}
        style={styles.searchbar}
        icon={() => <MagnifyIcon width={24} height={24} fill="#6200ee" />}
        right={() =>
          loading ? (
            <View style={styles.rightIcon}>
              <ActivityIndicator size={20} color="#6200ee" />
            </View>
          ) : query ? (
            <View style={styles.rightIcon}>
              <CloseIcon
                width={24}
                height={24}
                fill="#6200ee"
                onPress={() => setQuery('')}
              />
            </View>
          ) : null
        }
        inputStyle={styles.input}
        elevation={2}
      />

      <SearchResults
        results={results}
        loading={loading}
        onSelect={handleSelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
  },
  input: {
    color: '#121212',
    minHeight: 48,
  },
  rightIcon: {
    paddingRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;
