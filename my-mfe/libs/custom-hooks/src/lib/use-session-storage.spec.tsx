import { render } from '@testing-library/react';

import UseSessionStorage from './use-session-storage';

describe('UseSessionStorage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseSessionStorage />);
    expect(baseElement).toBeTruthy();
  });
});
