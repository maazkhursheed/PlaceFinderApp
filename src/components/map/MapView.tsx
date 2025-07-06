import React from 'react';
import MapView, { Marker, Callout, Region } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import { usePlacesStore } from '../../store/placesStore';

const DEFAULT_REGION: Region = {
  latitude: 24.8607, 
  longitude: 67.0011,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

const MapViewComponent: React.FC = () => {
  const selectedPlace = usePlacesStore((state) => state.selectedPlace);
  const location = selectedPlace?.location;

  const region: Region = location
    ? {
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    : DEFAULT_REGION;

  return (
    <MapView
      style={styles.map}
      region={region}
      showsUserLocation
      showsMyLocationButton
    >
      {location && (
        <Marker
          coordinate={{
            latitude: location.lat,
            longitude: location.lng,
          }}
          pinColor="#6200ee"
        >
          <Callout tooltip>
            <View style={styles.callout}>
              <Text style={styles.calloutTitle}>{selectedPlace?.name || 'Unnamed Place'}</Text>
              <Text style={styles.calloutAddress}>{selectedPlace?.address || 'No address available'}</Text>
            </View>
          </Callout>
        </Marker>
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  callout: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    elevation: 4,
  },
  calloutTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#6200ee',
  },
  calloutAddress: {
    fontSize: 14,
    color: '#555',
  },
});

export default React.memo(MapViewComponent);
