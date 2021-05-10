import React, { Suspense, lazy } from 'react';
import { IconProps } from './types';

const NoExisting = () => (
  <>Icon does not exist</>
);

function Icon({ name, stroke, type, color, ...props }: IconProps): JSX.Element {
  let iconName = `Iconoteka${name}${type[0].toUpperCase()}${type.slice(1)}`;
  const Component = lazy(() => import(`./Icons`).then((module: any) => ({ default: module[iconName] ?? NoExisting })));
  const strokeWidth = {
    lighter: 0.5,
    light: 0.8,
    regular: 1,
    medium: 1.5,
    bold: 1.8,
    bolder: 2,
  };
  return (
    <Suspense fallback={<></>}>
      <Component 
        width={24}
        height={24}
        fill={color}
        strokeWidth={strokeWidth[stroke]}
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
