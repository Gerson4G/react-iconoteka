import * as React from "react";

function SvgButtonWithTextFill(props: any): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M18 7H6a5 5 0 000 10h12a5 5 0 000-10zm-1 6H7v-2h10z"
        data-name="Clear 3"
      />
    </svg>
  );
}

export default SvgButtonWithTextFill;
