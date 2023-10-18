/* eslint-disable react/no-danger */

import React from 'react';
import classNameBind from 'classnames/bind';

import NAMES from './Icons';
import SIZES from './Sizes';
import COLORS from './Colors';
import FILLSIZES from './FillSizes';
import styles from './Icon.module.css';
import svgs from './svgs';

const bindClasses = classNameBind.bind(styles);

const getIconHTML = (name) => {
  if (name === 'empty') {
    return null;
  }

  const file = svgs.find(svg => svg.name === name);

  if (typeof file !== 'undefined') {
    return file.code;
  }

  return null;
};

const Icon = ({
  name,
  className,
  helper,
  color,
  size,
  filled,
  invertedFill,
  fillSize,
  badge,
}) => {
  const innerHTML = { __html: getIconHTML(name) };

  return (filled || invertedFill) ? (
    <span
      role="img"
      aria-label={name}
      data-ppuc-id="Icon"
      className={bindClasses('icon-wrapper', { filled: filled && !invertedFill, invertedFill }, size, `fillSize-${fillSize}`, `wrapper-${color}`)}
    >
      <span
        title={helper}
        className={bindClasses('icon', `icon-${filled && !invertedFill ? 'white' : color}`, className)}
        dangerouslySetInnerHTML={innerHTML}
      />
      {badge && (
        <div className={bindClasses('badge')}>
          <div className={bindClasses('badge-container')}>
            <div className={bindClasses('badge-text')}>
              {badge}
            </div>
          </div>
        </div>
      )}
    </span>
  ) : (
    <span
      role="img"
      aria-label={name}
      title={helper}
      className={bindClasses('icon', `icon-${color}`, className, size)}
      dangerouslySetInnerHTML={innerHTML}
      data-ppuc-id="Icon"
    />
  );
};

Icon.defaultProps = {
  className: '',
  helper: '',
  size: SIZES[0],
  color: COLORS[0],
  filled: false,
  invertedFill: false,
  fillSize: FILLSIZES[0],
  badge: '',
};

Icon.propEnums = {
  name: NAMES,
  size: SIZES,
  color: COLORS,
  fillSize: FILLSIZES,
};

export default Icon;
