import classNames from 'classnames';
import styles from './flex.module.scss';

const FlexColumn = ({
  grow = 1,
  shrink = 1,
  basis = 'auto',
  alignSelf = 'auto',
  style,
  className,
  children,
}) => (
  <div
    className={classNames([styles['flex__column'], className])}
    style={{
      flex: `${grow} ${shrink} ${basis}`,
      alignSelf: alignSelf, // eslint-disable-line
      ...style,
    }}
  >
    {children}
  </div>
);

export default FlexColumn;
