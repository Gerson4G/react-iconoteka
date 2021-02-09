import * as React from "react";

function SvgLocationPlaceFill(props: any): JSX.Element {
  return (
    <svg
      data-name="Hot 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 23.93l-.67-.6C11 23 3 15.76 3 9a9 9 0 0118 0c0 6.77-8 14-8.32 14.34z" />
      <circle cx={12} cy={9} r={3} fill="#fff" />
    </svg>
  );
}

export default SvgLocationPlaceFill;
