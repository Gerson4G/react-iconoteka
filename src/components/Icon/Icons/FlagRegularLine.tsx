import * as React from "react";

function SvgFlagRegularLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M17.82 10.25L22 3H5V1H4v23h1v-8h17zM5 4h15.27L17 9.75l-.32.56.38.53L20 15H5z" />
    </svg>
  );
}

export default SvgFlagRegularLine;
