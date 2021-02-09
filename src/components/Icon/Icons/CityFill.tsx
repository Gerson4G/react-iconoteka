import * as React from "react";

function SvgCityFill(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16 7V2H8v10.86l-3-1.74-3 1.74V21h20V7zM6 17H4v-2h2zm7 0h-2v-2h2zm0-5h-2v-2h2zm0-5h-2V5h2zm7 10h-2v-2h2zm0-5h-2v-2h2z" />
    </svg>
  );
}

export default SvgCityFill;
