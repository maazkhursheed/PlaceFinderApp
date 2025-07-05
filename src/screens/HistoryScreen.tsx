import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HistoryList from '../components/history/HistoryList';
import { Place } from '../types/index';
import { usePlacesStore } from '../store/placesStore';

const HistoryScreen = ({ navigation }: any) => {
  const history = usePlacesStore((state) => state.history);
  const setSelectedPlace = usePlacesStore((state) => state.setSelectedPlace);

  const handleSelect = (place: Place) => {
    setSelectedPlace(place);
    navigation.navigate('Search');
  };

  return (
    <SafeAreaView style={styles.container}>
      <HistoryList history={history} onSelect={handleSelect} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default HistoryScreen;