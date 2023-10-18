import React from 'react';
import classNameBind from 'classnames/bind';
import styles from './Spinner.module.css';

const bindClasses = classNameBind.bind(styles);

const COLOR_FILL = '#e7f7ff';
const COLOR_PERCENT = '#107ef1';

const Spinner = ({
  className,
  inverseColor,
  progress,
  type,
  noMargin,
  dataId,
}) => {
  if (progress < 0) {
    return (
      <div className={bindClasses(type)} data-ppuc-id={dataId}>
        <div
          className={bindClasses(
            'spinner',
            'unknown-progress',
            className,
            { inverseColor, noMargin },
          )}
          data-ppuc-id={`${dataId}.content`}
        />
      </div>
    );
  }

  let deg = 360;
  if (progress <= 100) {
    deg = Math.round((progress * 360) / 100);
  }

  return (
    <div className={bindClasses(type)} data-ppuc-id={dataId}>
      <div
        className={bindClasses('spinner', className, { noMargin })}
        style={{
          backgroundImage: `linear-gradient(
              ${deg <= 180 ? (90 + deg) : (deg - 90)}deg,
              transparent 50%,
              ${deg <= 180 ? COLOR_FILL : COLOR_PERCENT} 50%
            ),
            linear-gradient(
              90deg,
              ${COLOR_FILL} 50%,
              transparent 50%
            )`,
        }}
        data-ppuc-id={`${dataId}.content`}
      >
        <div className={bindClasses('circle')}>
          {['large', 'x-large'].includes(className) && (
            <span className={bindClasses('percent')}>{`${Math.round(progress)}%`}</span>
          )}
        </div>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  className: 'medium',
  inverseColor: false,
  noMargin: false,
  progress: -1,
  type: 'default',
  dataId: 'Spinner',
};

export default Spinner;
