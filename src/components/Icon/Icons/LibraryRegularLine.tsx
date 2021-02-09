import * as React from "react";

function SvgLibraryRegularLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 7v14h18V7zm17 13H4V8h16zM19 3H5v1h14z" />
    </svg>
  );
}

export default SvgLibraryRegularLine;
