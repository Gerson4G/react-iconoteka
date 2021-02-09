import * as React from "react";

function SvgRepeatBold(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M10 6h4v3l4-4-4-4v3h-4a8 8 0 00-6.13 13.13l1.42-1.42A6 6 0 0110 6zm10.13.87l-1.42 1.42A6 6 0 0114 18h-4v-3l-4 4 4 4v-3h4a8 8 0 006.13-13.13z" />
    </svg>
  );
}

export default SvgRepeatBold;
