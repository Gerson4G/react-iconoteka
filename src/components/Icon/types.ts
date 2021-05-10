import IconName from './IconName';

export type IconProps = {
  name: IconName;
  className?: string;
  stroke: 'lighter' | 'light' | 'regular' | 'medium' | 'bold' | 'bolder';
  type: 'fill' | 'line';
  height?: number;
  width?: number;
  color?: string;
};
