import * as React from "react";

function SvgHexagonFill(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 6.8v10.4l9 5.19 9-5.19V6.8l-9-5.19L3 6.8z" />
    </svg>
  );
}

export default SvgHexagonFill;
