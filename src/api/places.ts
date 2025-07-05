import Config from 'react-native-config';
import { 
  AutocompleteResponse, 
  PlaceDetails, 
  Prediction 
} from '../types';

export const autocompletePlaces = async (
  query: string
): Promise<AutocompleteResponse> => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(query)}&key=${Config.GOOGLE_API_KEY}`
  );
  return response.json();
};

export const getPlaceDetails = async (
  placeId: string
): Promise<PlaceDetails> => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,geometry&key=${Config.GOOGLE_API_KEY}`
  );
  return response.json();
};