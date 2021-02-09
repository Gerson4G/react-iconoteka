import * as React from "react";

function SvgReturnRegular(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20.5 4h-1v8.5H4.21l4.64-4.65-.7-.7L2.29 13l5.86 5.85.7-.7-4.64-4.65H20.5V4z" />
    </svg>
  );
}

export default SvgReturnRegular;
