import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  const defaultProps = {
    onClick: () => {},
    text: 'Test button',
  };

  test('should render default Button', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole('button');

    expect(screen.getByText('Test button')).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('default');
  });

  test('should render Button with icon', () => {
    render(<Button {...defaultProps} icon="debug" />);

    expect(screen.getByTestId('Icon')).toBeInTheDocument();
  });

  test('should render Button with icon on right', () => {
    render(<Button {...defaultProps} iconRight="debug" />);

    expect(screen.getByTestId('Icon')).toBeInTheDocument();
  });

  test('should render with passed appearance prop', () => {
    render(<Button {...defaultProps} appearance="primary" />);

    expect(screen.getByRole('button')).toHaveClass('primary');
  });

  test('should call onClick callback when clicked', () => {
    const onClickSpy = jest.fn();
    render(<Button {...defaultProps} onClick={onClickSpy} />);

    fireEvent.click(screen.getByRole('button'));

    expect(onClickSpy).toHaveBeenCalled();
  });

  test('should not call onClick callback when clicked but disabled', () => {
    const onClickSpy = jest.fn();
    render(<Button {...defaultProps} onClick={onClickSpy} disabled />);

    fireEvent.click(screen.getByRole('button'));

    expect(onClickSpy).not.toHaveBeenCalled();
  });

  test('should have minimalWidth class when minimalWidth prop passed', () => {
    render(<Button {...defaultProps} minimalWidth />);

    expect(screen.getByRole('button')).toHaveClass('minimalWidth');
  });

  test('should have fullWidth class when fullWidth prop passed', () => {
    render(<Button {...defaultProps} fullWidth />);

    expect(screen.getByRole('button')).toHaveClass('fullWidth');
  });

  test('should have breakLongContent class when breakLongContent prop passed', () => {
    render(<Button {...defaultProps} breakLongContent />);

    expect(screen.getByRole('button')).toHaveClass('breakLongContent');
  });

  test('should have active class when active prop passed', () => {
    render(<Button {...defaultProps} active />);

    expect(screen.getByRole('button')).toHaveClass('active');
  });

  test('hide content and render spinner when pending', () => {
    render(<Button {...defaultProps} pending />);

    expect(screen.getByTestId('Spinner')).toBeInTheDocument();
    expect(screen.getByText('Test button').parentElement).toHaveClass('pending');
  });

  test('assigns the button to a form element when \'form\' prop passed in', () => {
    render(<Button {...defaultProps} form="form-id" />);

    expect(screen.getByRole('button')).toHaveAttribute('form', 'form-id');
  });

  describe('with size prop and set icons', () => {
    test('should render small Button', () => {
      render(<Button {...defaultProps} size="small" icon="calendar" />);

      expect(screen.getByTestId('Button')).toHaveClass('size-small');
      expect(screen.getByTestId('Icon')).toHaveClass('small');
    });

    test('should render large Button', () => {
      render(<Button {...defaultProps} size="large" iconRight="calendar" />);

      expect(screen.getByTestId('Button')).toHaveClass('size-large');
      expect(screen.getByTestId('Icon')).toHaveClass('default');
    });
  });
});
