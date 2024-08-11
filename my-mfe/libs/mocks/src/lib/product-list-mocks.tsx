interface productListItem {
  id: number;
  title: string;
  image: string;
  price: number;
}

export const PRODUCT_LIST_MOCKS: Array<productListItem> = [
  {
    id: 1,
    title: 'Product 1',
    image: 'https://via.placeholder.com/150',
    price: 10,
  },
  {
    id: 2,
    title: 'Product 2',
    image: 'https://via.placeholder.com/150',
    price: 20,
  },
  {
    id: 3,
    title: 'Product 3',
    image: 'https://via.placeholder.com/150',
    price: 30,
  },
];

export default PRODUCT_LIST_MOCKS;
