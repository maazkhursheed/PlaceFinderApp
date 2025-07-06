import { useState, useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { Platform, PermissionsAndroid } from 'react-native';

export const useCurrentLocation = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const requestPermissionAndFetch = async () => {
      try {
        const hasPermission = await requestLocationPermission();
        if (!hasPermission) {
          setError('Permission denied');
          return;
        }

        Geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setError(null);
          },
          (err) => {
            setError(err.message);
            setLocation(null); // fallback will kick in
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 3000,
            forceRequestLocation: true,
          }
        );
      } catch (e) {
        setError('Failed to get location');
        setLocation(null);
      }
    };

    requestPermissionAndFetch();
  }, []);

  return { location, error };
};

const requestLocationPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'ios') {
    return true; // You must also add NSLocationWhenInUseUsageDescription in Info.plist
  }

  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Location Permission',
      message: 'App needs access to your location to show the map correctly.',
      buttonPositive: 'OK',
    }
  );

  return granted === PermissionsAndroid.RESULTS.GRANTED;
};
