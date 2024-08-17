import { Header } from '@ebay/ui';
import { Container, Header as Text } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { PRODUCT_LIST_MOCKS } from '@ebay/mocks';
import ShoppingBasket from './basket';
import { getSessionStorage } from '@ebay/utils';

export function App() {
  const basketFromStorage: any = getSessionStorage('shoppingBasket');
  console.log(basketFromStorage);

  const createCompleteBasket = (allItems: any, quantities: any) => {
    return allItems
      .filter((item: any) => quantities[item.id] > 0)
      .map((item: any) => {
        return {
          ...item,
          quantity: quantities[item.id],
        };
      });
  };

  const completeBasket = createCompleteBasket(PRODUCT_LIST_MOCKS, basketFromStorage);
  return (
    <Container style={{ marginTop: '5em' }}>
      <Header />
      <Text size="huge">Checkout App</Text>
      <ShoppingBasket basketList={completeBasket} />
    </Container>
  );
}

export default App;
