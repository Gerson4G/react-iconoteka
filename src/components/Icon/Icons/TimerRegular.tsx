import * as React from "react";

function SvgTimerRegular(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12.71 12l-4.4-4.4-.71.71 4.4 4.4zM12 2h-.5v4h1V3A9 9 0 116 5.29l-.7-.71A10 10 0 1012 2z" />
    </svg>
  );
}

export default SvgTimerRegular;
