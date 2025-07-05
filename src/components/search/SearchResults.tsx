import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ActivityIndicator, List } from 'react-native-paper';
import { Prediction } from '../../types';

interface SearchResultsProps {
  results: Prediction[];
  loading: boolean;
  onSelect: (item: Prediction) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, loading, onSelect }) => {
  if (results.length === 0 && !loading) return null;

  return (
    <>
      {loading && <ActivityIndicator style={styles.loader} />}
      
      <FlatList
        data={results}
        keyExtractor={(item) => item.place_id}
        renderItem={({ item }) => (
          <List.Item
            title={item.structured_formatting.main_text}
            description={item.structured_formatting.secondary_text}
            onPress={() => onSelect(item)}
            left={props => <List.Icon {...props} icon="map-marker" />}
            style={styles.listItem}
          />
        )}
        style={styles.resultsContainer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  resultsContainer: {
    maxHeight: 300,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 8,
    elevation: 2,
  },
  listItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  loader: {
    marginVertical: 8,
  },
});

export default SearchResults;