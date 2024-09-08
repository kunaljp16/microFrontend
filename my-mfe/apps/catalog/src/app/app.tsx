import React from 'react';
import { Container, Header as Text } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ProductList from './product-list';

const Recommendations = React.lazy(() => import('recommendations/Module'));

export function App() {
  return (
    <Container style={{ marginTop: '5em' }}>
      <Text size="huge">Catalog App</Text>
      <ProductList />
      <Recommendations />
    </Container>
  );
}

export default App;
