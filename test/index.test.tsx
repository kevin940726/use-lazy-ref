import React, { MutableRefObject, useReducer } from 'react';
import { render, act } from '@testing-library/react';
import useLazyRef from '..';

test('Lazily initialize the initializer only once', () => {
  const initializer = jest.fn(() => 87);
  let result: any;
  let forceUpdate: () => void = () => {};

  function TestComponent() {
    const ref = useLazyRef<number>(initializer);

    forceUpdate = useReducer((c) => c + 1, 0)[1];

    result = ref.current;

    return null;
  }

  render(<TestComponent />);

  expect(initializer).toHaveBeenCalledTimes(1);
  expect(result).toBe(87);

  act(() => {
    forceUpdate();
  });

  expect(initializer).toHaveBeenCalledTimes(1);
  expect(result).toBe(87);
});

test('Not accepting falsy values', () => {
  const initializer = jest.fn(() => 87);
  let result: any;
  let ref: MutableRefObject<any> = { current: null };
  let forceUpdate: () => void = () => {};

  function TestComponent() {
    ref = useLazyRef<number>(initializer);

    forceUpdate = useReducer((c) => c + 1, 0)[1];

    result = ref.current;

    return null;
  }

  render(<TestComponent />);

  expect(initializer).toHaveBeenCalledTimes(1);
  expect(result).toBe(87);

  ref.current = undefined;
  act(() => {
    forceUpdate();
  });

  expect(initializer).toHaveBeenCalledTimes(1);
  expect(result).toBe(undefined);

  ref.current = null;
  act(() => {
    forceUpdate();
  });

  expect(initializer).toHaveBeenCalledTimes(1);
  expect(result).toBe(null);
});
