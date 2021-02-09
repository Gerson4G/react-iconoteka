import * as React from "react";

function SvgButtonWithTextBoldLine(props: any): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M18 7H6a5 5 0 000 10h12a5 5 0 000-10zm0 8.3H6a3.3 3.3 0 010-6.6h12a3.3 3.3 0 010 6.6zM7 13h10v-2H7z"
        data-name="Clear 3"
      />
    </svg>
  );
}

export default SvgButtonWithTextBoldLine;
