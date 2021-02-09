import * as React from "react";

function SvgOpenWithBold(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M11 9h2V5h3l-4-4-4 4h3zm12 3l-4-4v3h-4v2h4v3zm-10 3h-2v4H8l4 4 4-4h-3zm-4-4H5V8l-4 4 4 4v-3h4z" />
    </svg>
  );
}

export default SvgOpenWithBold;
