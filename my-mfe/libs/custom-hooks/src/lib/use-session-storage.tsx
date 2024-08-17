import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { useEventCallback, useEventListener } from 'usehooks-ts';

declare global {
  interface WindowEventMap {
    'session-storage': CustomEvent;
  }
}

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useSessionStorage<T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] {
  // Get from session storage then
  // parse stored json or return initialValue
  const readValue = useCallback((): T => {
    // Prevent build error "window is undined" but keep working
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? (parseJSON(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading sessionStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  // State to store our value
  // Pass intial state function to useState so logic is only executed once

  const [storedValue, setStoredValue] = useState<T>(readValue);
  // Return a wrapped version of useState's setter function that persists the new value to sessionStorage

  const setValue: SetValue<T> = useEventCallback((value) => {
    // Prevent build error "window is undined" but keep working
    if (typeof window === 'undefined') {
      console.warn(
        `Tried setting sessionStorage key “${key}” even though environment is not a client`
      );
    }
    try {
      // Allow value to be a function so we have same API as useState
      const newValue = value instanceof Function ? value(storedValue) : value;

      // save to sesssion storage
      window.sessionStorage.setItem(key, JSON.stringify(newValue));
      // save state
      setStoredValue(newValue);
      // we dispatch a custom event so every useSessionStorage hook are notified
      window.dispatchEvent(new Event('session-storage'));
    } catch (error) {
      console.warn(`Error setting sessionStorage key “${key}”:`, error);
    }
  });

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue]
  );

  // this only works for other documents, not the current one

  useEventListener('storage', handleStorageChange);
  // this is a custom event triggered in writeValueToSessionStorage
  // see: useSessionStorage()
  useEventListener('session-storage', handleStorageChange);
  return [storedValue, setValue];
}

export default useSessionStorage;
// A wrapper for "JSON.paese() to support "undefined" value"

function parseJSON<T>(value: string): T | undefined {
  try {
    return JSON.parse(value) === undefined ? undefined : JSON.parse(value);
  } catch (error) {
    console.log('Parsing erro on', { value });
    return undefined;
  }
}
