import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { Place } from '../../types';

interface MapViewProps {
  location?: {
    lat: number;
    lng: number;
  };
}

const MapViewComponent: React.FC<MapViewProps> = ({ location }) => {
  return (
    <MapView
      style={styles.map}
      region={{
        latitude: location?.lat || 37.78825,
        longitude: location?.lng || -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
      showsMyLocationButton={true}
    >
      {location && (
        <Marker
          coordinate={{
            latitude: location.lat,
            longitude: location.lng,
          }}
          title="Selected Place"
          pinColor="#6200ee"
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapViewComponent;