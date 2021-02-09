import * as React from "react";

function SvgLabelFill(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19.44 19H2V5h17.44l4 7z" />
    </svg>
  );
}

export default SvgLabelFill;
