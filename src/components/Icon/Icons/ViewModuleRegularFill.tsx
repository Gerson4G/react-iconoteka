import * as React from "react";

function SvgViewModuleRegularFill(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 20h6v-7.5H2zm7-8.5h6V4H9zm-7 0h6V4H2zM16 4v7.5h6V4zM9 20h6v-7.5H9zm7 0h6v-7.5h-6z" />
    </svg>
  );
}

export default SvgViewModuleRegularFill;
