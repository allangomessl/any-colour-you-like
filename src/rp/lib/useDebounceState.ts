import { useEffect, useState } from 'react'


export function useDebounceState<T=any>(delay=500, initialValue: T = null) {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );

  return [debouncedValue, setValue];
}