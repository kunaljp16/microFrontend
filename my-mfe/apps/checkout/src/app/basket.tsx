import { Table, Image, Container } from 'semantic-ui-react';

export function ShoppingBasket(basketListData: any) {
  const { basketList } = basketListData;
  return (
    <Container textAlign="center">
      <Table basic="very" rowed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Items</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {basketList.map((product: any) => (
            <Table.Row key={product.id}>
              <Table.Cell>
                <Image src={product.image} size="mini" rounded />
              </Table.Cell>
              <Table.Cell>${product.title}</Table.Cell>
              <Table.Cell>{product.quantity || 0}</Table.Cell>
              <Table.Cell>${product.price * product.quantity}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}

export default ShoppingBasket;
