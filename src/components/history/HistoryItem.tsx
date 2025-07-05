import React from 'react';
import { List } from 'react-native-paper';
import { Place } from '../../types';
import { StyleSheet } from 'react-native';

interface HistoryItemProps {
  place: Place;
  onPress: (place: Place) => void;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ place, onPress }) => (
  <List.Item
    title={place.name}
    description={place.address}
    left={props => <List.Icon {...props} icon="map-marker" color="#6200ee" />}
    onPress={() => onPress(place)}
    style={styles.item}
    titleStyle={styles.title}
    descriptionStyle={styles.description}
    titleNumberOfLines={1}
    descriptionNumberOfLines={2}
  />
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 12,
    elevation: 1,
  },
  title: {
    fontWeight: '600',
    color: '#121212',
  },
  description: {
    color: '#616161',
    fontSize: 14,
  },
});

export default HistoryItem;