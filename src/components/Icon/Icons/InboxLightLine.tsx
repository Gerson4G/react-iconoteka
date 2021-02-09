import * as React from "react";

function SvgInboxLightLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 3v18h18V3zm17.5 17.5h-17v-6H9a3 3 0 005.92 0h5.58zm-6-6.5a2.5 2.5 0 01-5 0h-6V3.5h17V14z" />
    </svg>
  );
}

export default SvgInboxLightLine;
