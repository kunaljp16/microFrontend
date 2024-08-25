import { Menu, Container, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useEventListener } from 'usehooks-ts';
import { getSessionStorage } from '@ebay/utils';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header() {
  const getTotalBasetCount = (Basket: any): any => {
    return Object.values(Basket).reduce((a: any, b: any) => a + b, 0);
  };
  const [miniBasketCount, setMiniBasketCount] = useState(null);

  useEffect(() => {
    const basket: any = getSessionStorage('shoppingBasket');
    const totalCount: any = getTotalBasetCount(basket);
    setMiniBasketCount(totalCount);
  }, []);

  useEventListener('session-storage', () => {
    const basket: any = getSessionStorage('shoppingBasket');
    const totalCount: any = getTotalBasetCount(basket);
    setMiniBasketCount(totalCount);
  });

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item a="a" header>
          ebay.com
        </Menu.Item>
        <MenuItems />
        <Menu.Item position="right">
          <Label>
            <Icon name="shopping cart" />
            {miniBasketCount}
          </Label>
        </Menu.Item>
      </Container>
    </Menu>
  );
}

const MenuItems = () => {
  return (
    <>
      {NAV_ITEMS.map((navItem, index) => (
        <Menu.Item key={index}>
          <Link to={navItem.href ?? '#'}>{navItem.label}</Link>
        </Menu.Item>
      ))}
    </>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Catalog',
    href: '/',
  },
  {
    label: 'Checkout',
    href: '/checkout',
  },
];

export default Header;
