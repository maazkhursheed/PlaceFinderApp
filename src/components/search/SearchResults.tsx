// components/SearchResults.tsx
import React, { useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
  View,
  Animated,
} from 'react-native';
import { ActivityIndicator, List } from 'react-native-paper';
import { Prediction } from '../../types';
import LocationIcon from '../../assets/icons/location.svg';

interface SearchResultsProps {
  results: Prediction[];
  loading: boolean;
  onSelect: (item: Prediction) => void;
}

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, loading, onSelect }) => {
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [results]);

  if (results.length === 0 && !loading) return null;

  return (
    <Animated.View style={styles.container}>
      {loading && <ActivityIndicator style={styles.loader} />}
      <FlatList
        data={results}
        keyExtractor={(item) => item.place_id}
        renderItem={({ item }) => (
          <List.Item
            title={item.structured_formatting.main_text}
            description={item.structured_formatting.secondary_text}
            onPress={() => onSelect(item)}
            left={props => (
              <List.Icon {...props} icon={() => (
                <LocationIcon width={24} height={24} fill="#6200ee" />
              )} />
            )}
            style={styles.item}
          />
        )}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 8,
    elevation: 2,
  },
  loader: {
    marginVertical: 8,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});

export default React.memo(SearchResults);