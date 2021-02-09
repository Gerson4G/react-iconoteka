import * as React from "react";

function SvgPinBoldLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M15.29.91l-.47.48a1 1 0 00-.29.56l-.2 1.34-5.4 5.4-2.49-.49a1.72 1.72 0 00-.39 0 2 2 0 00-1.41.58l-1.37 1.33 4.6 4.59L1 21.57V23h1.4l6.88-6.88 4.6 4.59 1.36-1.36a2 2 0 00.55-1.81l-.5-2.48 5.4-5.4L22 9.45a1 1 0 00.55-.28l.48-.48zm4 7.33l-5.4 5.4-.76.76.21 1 .47 2.36-7.64-7.58 2.37.47 1 .21.76-.75 5.4-5.4.3-.26L19.53 8z" />
    </svg>
  );
}

export default SvgPinBoldLine;
