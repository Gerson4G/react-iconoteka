import { IconProps } from './types';
declare function Icon({ name, stroke, type, color, ...props }: IconProps): JSX.Element;
declare namespace Icon {
    var defaultProps: {
        className: string;
        stroke: string;
        type: string;
    };
}
export default Icon;
