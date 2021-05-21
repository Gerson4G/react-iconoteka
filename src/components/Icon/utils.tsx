import React, { lazy } from 'react';

const componentsMap = new Map();

export const getCachedLazy = (name: string,  NotFound: React.ReactNode = () => <></>) => {
  if (componentsMap.has(name)) return componentsMap.get(name);

  const Component = lazy(() => import('./Icons').then((module: any) => ({ default: module[name] ?? NotFound})));

  componentsMap.set(name, Component);

  return Component;
};
