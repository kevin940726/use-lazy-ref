# use-lazy-ref

A custom [react hook](https://reactjs.org/docs/hooks-intro.html) equivalent of `useRef` but only lazily initialize once.

![npm](https://img.shields.io/npm/v/use-lazy-ref.svg)

## Installation

```sh
yarn add use-lazy-ref
```

```sh
npm install use-lazy-ref
```

## Usage

```jsx
import useLazyRef from 'use-lazy-ref';

function App() {
  const ref = useLazyRef(() => expensiveCalculation());

  return ref.current;
}
```

## Author, License

Kai Hao

## License

[MIT](LICENSE)
