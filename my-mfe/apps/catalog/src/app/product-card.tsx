import { Button, Card, Image } from 'semantic-ui-react';

interface ProductData {
  product: {
    title: string;
    image: string;
    description: string;
    price: number;
  };
}

export function ProductCard(productData: ProductData) {
  const { product } = productData;
  return (
    <Card>
      <Card.Content>
        <Image alt={product.title} src={product.image} />
        <Card.Header>{product.title}</Card.Header>
        <Card.Description>{product.description}</Card.Description>
        <Card.Header>${product.price}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className="ui three buttons">
          <Button basic color="red">
            {' '}
            Remove
          </Button>
          <Button basic color="blue">
            {' '}
            {0}
          </Button>
          <Button basic color="green">
            {' '}
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
export default ProductCard;
