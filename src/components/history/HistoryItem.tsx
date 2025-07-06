import React from 'react';
import { List } from 'react-native-paper';
import { Place } from '../../types';
import { StyleSheet } from 'react-native';
import LocationIcon from '../../assets/icons/location.svg';

interface HistoryItemProps {
  place: Place;
  onPress: (place: Place) => void;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ place, onPress }) => (
  <List.Item
    title={place.name}
    description={place.address}
    onPress={() => onPress(place)}
    left={props => (
      <List.Icon
        {...props}
        icon={() => <LocationIcon width={24} height={24} fill="#6200ee" />}
      />
    )}
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
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
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

export default React.memo(HistoryItem);
