import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  const validEntries = stored ? JSON.parse(stored).filter((item) => item) : [];
  const initial = validEntries.length > 0 ? validEntries : defaultValue;
  const [value, setValue] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
