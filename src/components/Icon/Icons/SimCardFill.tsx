import * as React from "react";

function SvgSimCardFill(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8.59 2L4 6.59V22h16V2zM17 17.75A1.25 1.25 0 0115.75 19h-3.5A1.25 1.25 0 0111 17.75v-4.5A1.25 1.25 0 0112.25 12h3.5A1.25 1.25 0 0117 13.25z" />
    </svg>
  );
}

export default SvgSimCardFill;
