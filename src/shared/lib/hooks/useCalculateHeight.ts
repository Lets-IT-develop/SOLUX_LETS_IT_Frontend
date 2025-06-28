import { useEffect, useState, type RefObject } from 'react';

interface Options<T extends HTMLElement> {
  ref: RefObject<T | null>;
  deps?: unknown[];
}

export const useCalculateHeight = <T extends HTMLElement>({ ref, deps = [] }: Options<T>) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [...deps]);

  return { height };
};
