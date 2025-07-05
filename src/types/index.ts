export interface Place {
  place_id: string;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface Prediction {
  description: string;
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

export interface PlaceDetails {
  result: {
    formatted_address: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    name: string;
  };
}

export interface AutocompleteResponse {
  predictions: Prediction[];
  status: string;
}