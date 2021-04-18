import React, { Suspense, lazy } from 'react';
import { IconProps } from './types';
import { namesArray } from './iconNames';

function Icon({ name, stroke, type, color, fillColor, borderColor, ...props }: IconProps): JSX.Element {
  let iconName = `Iconoteka${name}${type[0].toUpperCase()}${type.slice(1)}`;
  const Component = lazy(() => import(`./Icons`).then((module: any) => ({ default: module[iconName] })));
  const strokeWidth = {
    light: 1,
    regular: 1.25,
    medium: 1.5,
    bold: 1.8,
  };
  return (
    <Suspense fallback={<></>}>
      <Component 
        width={24}
        height={24}
        fill={fillColor ?? color}
        stroke={borderColor ?? color}
        strokeWidth={strokeWidth[stroke]}
        {...props} />
    </Suspense>
  );
}

Icon.defaultProps = {
  className: '',
  stroke: 'regular',
  type: 'line',
};

export default Icon;
