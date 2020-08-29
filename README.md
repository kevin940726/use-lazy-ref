# use-lazy-ref

A custom [react hook](https://reactjs.org/docs/hooks-intro.html) equivalent of `useRef` but only lazily initialize once.

![npm](https://img.shields.io/npm/v/@kevin940726/use-lazy-ref.svg)

## Installation

```sh
yarn add @kevin940726/use-lazy-ref
```

```sh
npm install --save @kevin940726/use-lazy-ref
```

## Usage

```jsx
import useLazyRef from '@kevin940726/use-lazy-ref';

function App() {
  const ref = useLazyRef(() => expensiveCalculation());

  return ref.current;
}
```

## Author

Kai Hao

## License

[MIT](LICENSE)
