import React from 'react';
import classNameBind from 'classnames/bind';
import Icon from '../Icon';
import Spinner from '../Spinner';
import styles from './Button.module.css';

const whiteTextAppearance = ['primary', 'destructive', 'constructive'];

const bindClasses = classNameBind.bind(styles);

const Button = ({
  text = '',
  onClick = () => {},
  appearance = 'default',
  disabled = false,
  noHover = false,
  type = 'button',
  icon = null,
  iconRight = null,
  minimalWidth = false,
  fullWidth = false,
  pending = false,
  cutText = false,
  breakLongContent = false,
  setRef = null,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  onDragEnter = () => {},
  focused = false,
  className = '',
  dataId = 'Button',
  active = false,
  badge = '',
  size = 'large',
  form = undefined,
}) => {
  const getIconColor = () => {
    if (['simple', 'subdued', 'subdued-compact', 'rounded'].includes(appearance) && active) {
      return 'white';
    }
    if (['simple', 'rounded'].includes(appearance)) return 'blue';
    if (['destructive-simple'].includes(appearance)) return 'red';

    return whiteTextAppearance.includes(appearance) ? 'white' : 'black';
  };

  const blockButton = disabled || pending;

  /* eslint-disable react/button-has-type */
  return (
    <button
      type={blockButton ? 'button' : type}
      onClick={e => (blockButton ? null : onClick(e))}
      className={bindClasses(appearance,
        {
          disabled,
          fullWidth,
          pending,
          noHover,
          breakLongContent,
          minimalWidth: minimalWidth || !!icon || !!iconRight,
          active,
        },
        `size-${size}`,
        `${className}`)}
      ref={setRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onDragEnter={onDragEnter}
      autoFocus={focused}
      tabIndex={blockButton ? -1 : 0}
      data-ppuc-id={dataId}
      disabled={false}
      form={form}
    >
      {pending && (
        <div className={bindClasses('spinner-wrapper')}>
          <Spinner inverseColor={getIconColor() === 'white'} className="small" />
        </div>
      )}
      <span className={bindClasses('content-wrapper', { cutText, pending })}>
        {icon && (
          <Icon
            name={icon}
            size={size === 'large' ? 'default' : 'small'}
            color={getIconColor()}
            data-ppuc-id="Button.icon"
          />
        )}
        {text && (
          <div
            className={bindClasses('text', `size-${size}`)}
            data-ppuc-id="Button.text"
          >
            {text}
          </div>
        )}
        {badge && (
          <div className={bindClasses('badge')}>{badge}</div>
        )}
        {iconRight && (
          <Icon
            name={iconRight}
            color={getIconColor()}
            size={size === 'large' ? 'default' : 'small'}
            data-ppuc-id="Button.iconRight"
          />
        )}
      </span>
    </button>
  );
};

export default Button;
