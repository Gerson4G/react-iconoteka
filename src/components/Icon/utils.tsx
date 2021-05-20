import React, { lazy } from 'react';

const componentsMap = new Map();

export const getCachedLazy = (name: string, path: string = './Icons', NotFound: React.ReactNode = () => <></>) => {
  if (componentsMap.has(name)) return componentsMap.get(name);

  const Component = lazy(() => import(`${path}`).then((module: any) => ({ default: module[name] ?? NotFound})));

  componentsMap.set(name, Component);

  return Component;
};
