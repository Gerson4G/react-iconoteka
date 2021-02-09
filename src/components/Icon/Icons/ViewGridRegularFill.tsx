import * as React from "react";

function SvgViewGridRegularFill(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 11.5h8.5V3H3zM3 21h8.5v-8.5H3zm9.5 0H21v-8.5h-8.5zm0-18v8.5H21V3z" />
    </svg>
  );
}

export default SvgViewGridRegularFill;
