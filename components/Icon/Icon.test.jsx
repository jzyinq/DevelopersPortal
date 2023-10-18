import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

describe('Icon component', () => {
  const defaultProps = {
    name: 'abandoned-cart',
  };

  test('should render Icon with default color and default size', () => {
    render(<Icon {...defaultProps} />);
    const icon = screen.getByTestId('Icon');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon icon-default default');
    expect(icon.querySelector('svg')).toBeInTheDocument();
  });

  test('should set role and aria-label attributes', () => {
    render(<Icon {...defaultProps} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByLabelText('abandoned-cart')).toBeInTheDocument();
  });

  test('should render Icon with predefined color', () => {
    render(<Icon {...defaultProps} color="red" />);

    expect(screen.getByTestId('Icon')).toHaveClass('icon icon-red default');
  });

  test('should render Icon with predefined size', () => {
    render(<Icon {...defaultProps} size="medium" />);

    expect(screen.getByTestId('Icon')).toHaveClass('icon icon-default medium');
  });

  test('should render Icon with helper text', () => {
    render(<Icon {...defaultProps} helper="test" />);

    expect(screen.getByTitle('test')).toBeInTheDocument();
  });

  test('should render filled Icon', () => {
    render(<Icon {...defaultProps} filled />);
    const icon = screen.getByTestId('Icon');

    expect(icon).toHaveClass('icon-wrapper filled default fillSize-default wrapper-default');
  });

  test('should render inverted filled Icon', () => {
    render(<Icon {...defaultProps} invertedFill />);
    const icon = screen.getByTestId('Icon');

    expect(icon).toHaveClass('icon-wrapper invertedFill default fillSize-default wrapper-default');
  });

  test('should render properly filled Icon with changed fill size', () => {
    render(<Icon {...defaultProps} filled fillSize="large" />);
    const icon = screen.getByTestId('Icon');

    expect(icon).toHaveClass('icon-wrapper filled default fillSize-large wrapper-default');
  });

  test('should render Icon with badge', () => {
    render(<Icon {...defaultProps} filled badge="このディオだ" />);

    expect(screen.getByText('このディオだ')).toBeInTheDocument();
  });
});
