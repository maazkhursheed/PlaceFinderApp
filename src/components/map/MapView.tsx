import React from 'react';
import MapView, { Marker, Callout, Region, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';

interface Props {
  location?: { lat: number; lng: number };
  name?: string;
  address?: string;
}

const DEFAULT_REGION: Region = {
  latitude: 3.139,
  longitude: 101.6869,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

const MapViewComponent: React.FC<Props> = ({ location, name, address }) => {
  const { location: currentLocation } = useCurrentLocation();

  // Determine which location to use
  const finalLat = location?.lat ?? currentLocation?.latitude ?? DEFAULT_REGION.latitude;
  const finalLng = location?.lng ?? currentLocation?.longitude ?? DEFAULT_REGION.longitude;

  const region: Region = {
    latitude: finalLat,
    longitude: finalLng,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const shouldShowMarker = !!location || !!currentLocation || true; // always show at least 1 marker

  const markerTitle = name ?? (location ? 'Selected Location' : currentLocation ? 'Your Location' : 'Kuala Lumpur');
  const markerAddress = address ?? 'Kuala Lumpur, Malaysia';

  return (
    <MapView
      style={styles.map}
      region={region}
      showsUserLocation={!!currentLocation}
      showsMyLocationButton={true}
      followsUserLocation={!!currentLocation}
    >
      {shouldShowMarker && (
        <Marker
          coordinate={{ latitude: finalLat, longitude: finalLng }}
          pinColor="#6200ee"
        >
          <Callout tooltip>
            <View style={styles.callout}>
              <Text style={styles.calloutTitle}>{markerTitle}</Text>
              <Text style={styles.calloutAddress}>{markerAddress}</Text>
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
