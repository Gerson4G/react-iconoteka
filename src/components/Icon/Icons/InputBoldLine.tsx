import * as React from "react";

function SvgInputBoldLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M10 16l4-4-4-4v3H2v2h8zM2 4v5h2V6h16v12H4v-3H2v5h20V4z" />
    </svg>
  );
}

export default SvgInputBoldLine;
