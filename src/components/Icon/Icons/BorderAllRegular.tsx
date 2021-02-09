import * as React from "react";

function SvgBorderAllRegular(props: any): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M3 3v18h18V3zm1 1h7.5v7.5H4zm0 16v-7.5h7.5V20zm16 0h-7.5v-7.5H20zm-7.5-8.5V4H20v7.5z"
        data-name="Clear 3"
      />
    </svg>
  );
}

export default SvgBorderAllRegular;
