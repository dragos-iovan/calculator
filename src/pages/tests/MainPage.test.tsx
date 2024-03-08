import { render, RenderResult } from '@testing-library/react';
import MainPage from '../MainPage';

describe("calculator elements visible to user", () => {
  let getByRole: RenderResult['getByRole'];

  beforeEach(() => {
    const { getByRole: getByRoleInstance } = render(<MainPage />);
    getByRole = getByRoleInstance;
  });

  test('if add button is visible to user', () => {
    const btnAdd = getByRole('button', { name: '+' });
    expect(btnAdd).toBeInTheDocument();
  });

  test('if subtract button is visible to user', () => {
    const btnSubtract = getByRole('button', { name: '-' });
    expect(btnSubtract).toBeInTheDocument();
  });

  test('if multiply button is visible to user', () => {
    const btnMultiply = getByRole('button', { name: 'x' });
    expect(btnMultiply).toBeInTheDocument();
  });

  test('if divide button is visible to user', () => {
    const btnDivide = getByRole('button', { name: '/' });
    expect(btnDivide).toBeInTheDocument();
  });

  test('if percent button is visible to user', () => {
    const btnPercent = getByRole('button', { name: '%' });
    expect(btnPercent).toBeInTheDocument();
  });

  test('if factorial (x!) button is visible to user', () => {
    const btnFactorial = getByRole('button', { name: 'x!' });
    expect(btnFactorial).toBeInTheDocument();
  });
});
