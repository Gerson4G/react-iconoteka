import * as React from "react";

function SvgMouseBoldLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 6a1 1 0 00-1 1v2a1 1 0 002 0V7a1 1 0 00-1-1zm2-4h-4a5 5 0 00-5 5v8a7 7 0 0014 0V7a5 5 0 00-5-5zm3 13a5 5 0 01-10 0V7a3 3 0 013-3h4a3 3 0 013 3z" />
    </svg>
  );
}

export default SvgMouseBoldLine;
