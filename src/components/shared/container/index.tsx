import { PropsWithChildren } from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
}

const Container = ({
  className,
  children,
}: PropsWithChildren<Props>): JSX.Element => {
  return <div className={cx('container mx-auto', className)}>{children}</div>;
};

export default Container;
