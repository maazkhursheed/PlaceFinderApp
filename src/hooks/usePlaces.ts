import { useState, useEffect } from 'react';
import { autocompletePlaces } from '../api/places';
import { Prediction } from '../types';

export const usePlaces = (query: string) => {
  const [results, setResults] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true);
      autocompletePlaces(query)
        .then(data => {
          setResults(data.predictions || []);
          setError(null);
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    } else {
      setResults([]);
    }
  }, [query]);

  return { results, loading, error };
};