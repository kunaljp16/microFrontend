import { Header } from '@ebay/ui';
import { Container, Header as Text } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { PRODUCT_LIST_MOCKS } from '@ebay/mocks';
import ShoppingBasket from './basket';

export function App() {
  return (
    <Container style={{ marginTop: '5em' }}>
      <Header />
      <Text size="huge">Checkout App</Text>
      <ShoppingBasket basketList={PRODUCT_LIST_MOCKS} />
    </Container>
  );
}

export default App;
