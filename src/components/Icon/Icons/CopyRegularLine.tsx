import * as React from "react";

function SvgCopyRegularLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 7H4v14h12v-1H5zm3-4v14h12V3zm11 13H9V4h10z" />
    </svg>
  );
}

export default SvgCopyRegularLine;
