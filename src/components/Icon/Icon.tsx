import React, { Suspense, lazy } from 'react';
import { IconProps } from './types';
import { namesArray } from './iconNames';

function Icon({ name, stroke, type, color, ...props }: IconProps): JSX.Element {
  let iconName = `${name}${stroke[0].toUpperCase()}${stroke.slice(1)}`;
  if (!namesArray.includes(iconName)) {
    iconName += `${type[0].toUpperCase()}${type?.slice(1)}`;
  }
  console.log(iconName)
  const Component = lazy(() => import(`./Icons`).then((module: any) => ({ default: module[iconName] })));
  return (
    <Suspense fallback={<></>}>
      <Component width={24} height={24} fill={color} {...props} />
    </Suspense>
  );
}

Icon.defaultProps = {
  className: '',
  stroke: 'regular',
  type: 'line',
};

export default Icon;
