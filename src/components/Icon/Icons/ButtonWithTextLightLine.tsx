import * as React from "react";

function SvgButtonWithTextLightLine(props: any): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M18 7H6a5 5 0 000 10h12a5 5 0 000-10zm0 9.5H6a4.5 4.5 0 010-9h12a4.5 4.5 0 010 9zM7 12.25h10v-.5H7z"
        data-name="Clear 3"
      />
    </svg>
  );
}

export default SvgButtonWithTextLightLine;
