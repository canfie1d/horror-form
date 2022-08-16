import classNames from 'classnames';
import style from './flex.module.scss';
import FlexColumn from './FlexColumn';

const Flex = ({
  wrap = false,
  direction = 'row',
  reversed,
  alignment,
  justify,
  className,
  children,
  gap,
}) => {
  const classes = [
    style.flex,
    wrap && style['flex--wrap'],
    reversed && style['flex--reversed'],
    direction && style[`flex--${direction}`],
    alignment && style[`flex--align-${alignment}`],
    justify && style[`flex--justify-${justify}`],
    className && className,
  ];

  return (
    <div className={classNames(classes)} style={gap ? { gap: gap } : {}}>
      {children}
    </div>
  );
};

Flex.Row = Flex;
Flex.Column = FlexColumn;

export default Flex;
