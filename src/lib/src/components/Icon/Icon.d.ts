import { IconProps } from './types';
declare function Icon({ name, stroke, type, color, fillColor, borderColor, ...props }: IconProps): JSX.Element;
declare namespace Icon {
    var defaultProps: {
        className: string;
        stroke: string;
        type: string;
        color: string;
    };
}
export default Icon;
