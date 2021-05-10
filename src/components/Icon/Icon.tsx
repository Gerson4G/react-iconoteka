import React, { Suspense, lazy } from 'react';
import { IconProps } from './types';

const NoExisting = () => (
  <>Icon does not exist</>
);

function Icon({ name, stroke, type, color, ...props }: IconProps): JSX.Element {
  let iconName = `Iconoteka${name}${type[0].toUpperCase()}${type.slice(1)}`;
  const Component = lazy(() => import(`./Icons`).then((module: any) => ({ default: module[iconName] ?? NoExisting })));
  const strokeWidth = {
    regular: 0,
    medium: 1,
    bold: 1.3,
    bolder: 1.6,
  };
  return (
    <Suspense fallback={<></>}>
      <Component 
        width={24}
        height={24}
        fill={color}
        strokeWidth={strokeWidth[stroke]}
        stroke={stroke !== 'regular' ? color : undefined}
        {...props} />
    </Suspense>
  );
}

Icon.defaultProps = {
  className: '',
  stroke: 'regular',
  type: 'line',
  color: 'black',
};

export default Icon;
