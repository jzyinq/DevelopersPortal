import React from 'react';
import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner component', () => {
  const defaultProps = {
    className: 'small',
  };

  test('should render spinner', () => {
    render(<Spinner {...defaultProps} />);

    expect(screen.getByTestId('Spinner')).toBeInTheDocument();
  });

  test('should render fullscreen spinner when prop passed', () => {
    render(<Spinner {...defaultProps} type="fullscreen" />);

    expect(screen.getByTestId('Spinner')).toHaveClass('fullscreen');
  });

  test('should render no margins spinner when prop passed', () => {
    render(<Spinner {...defaultProps} noMargin />);

    expect(screen.getByTestId('Spinner.content')).toHaveClass('noMargin');
  });

  test('should center spinner when prop passed', () => {
    render(<Spinner {...defaultProps} type="centered" />);

    expect(screen.getByTestId('Spinner')).toHaveClass('centered');
  });
});
