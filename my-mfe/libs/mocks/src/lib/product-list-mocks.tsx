interface productListItem {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

export const PRODUCT_LIST_MOCKS: Array<productListItem> = [
  {
    id: 1,
    title: 'Apple',
    image: '/assets/apple.jpg',
    price: 1.99,
    description: 'This is a red apple',
  },
  {
    id: 2,
    title: 'Orange',
    image: '/assets/orange.jpg',
    price: 2.5,
    description: 'This is a juicy orange',
  },
  {
    id: 3,
    title: 'Banana',
    image: '/assets/bananas.jpg',
    price: 0.7,
    description: 'This is a yellow banana',
  },
];

export default PRODUCT_LIST_MOCKS;
