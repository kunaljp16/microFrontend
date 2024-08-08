import { Header } from '@ebay/ui';
import { Container, Header as Text } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export function App() {
  return (
    <Container style={{ marginTop: '5em' }}>
      <Header />
      <Text size="huge">Checkout App</Text>
    </Container>
  );
}

export default App;
