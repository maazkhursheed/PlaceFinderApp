import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import HistoryItem from './HistoryItem';
import { Place } from '../../types';
import { Button } from 'react-native-paper';
import { usePlacesStore } from '../../store/placesStore';

interface HistoryListProps {
  history: Place[];
  onSelect: (place: Place) => void;
}

const HistoryList: React.FC<HistoryListProps> = ({ history, onSelect }) => {
  const clearHistory = usePlacesStore(state => state.clearHistory);

  // ✅ Optimized item press handler
  const handleSelect = useCallback(
    (place: Place) => {
      onSelect(place);
    },
    [onSelect]
  );

  return (
    <View style={styles.container}>
      {history.length > 0 ? (
        <>
          <FlatList
            data={history}
            keyExtractor={(item) => item.place_id}
            renderItem={({ item }) => (
              <HistoryItem place={item} onPress={handleSelect} />
            )}
            contentContainerStyle={styles.list}
          />
          <Button
            mode="outlined"
            onPress={clearHistory}
            style={styles.clearButton}
          >
            Clear History
          </Button>
        </>
      ) : (
        <Text style={styles.empty}>No search history yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    color: '#888',
    fontSize: 16,
  },
  clearButton: {
    margin: 16,
    alignSelf: 'center',
  },
});

export default HistoryList;
