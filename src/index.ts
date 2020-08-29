import { useRef, MutableRefObject } from 'react';

const INITIAL_TAG = Symbol('INITIAL_TAG');

function useLazyRef<T>(initializer: () => T): MutableRefObject<T> {
  const ref = useRef<T | typeof INITIAL_TAG>(INITIAL_TAG);

  if (ref.current === INITIAL_TAG) {
    ref.current = initializer();
  }

  return ref as MutableRefObject<T>;
}

export default useLazyRef;
