import * as React from "react";

function SvgTimerLight(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12.35 12L8.13 7.78l-.35.35L12 12.35zM12 2h-.25v4h.5V2.5a9.49 9.49 0 11-6.79 2.6l-.35-.36A10 10 0 1012 2z" />
    </svg>
  );
}

export default SvgTimerLight;
