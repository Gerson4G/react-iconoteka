import * as React from "react";

function SvgMouseLightLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 5a.25.25 0 00-.25.25v3.5a.25.25 0 00.5 0v-3.5A.25.25 0 0012 5zm2-3h-4a5 5 0 00-5 5v8a7 7 0 0014 0V7a5 5 0 00-5-5zm4.5 13a6.5 6.5 0 01-13 0V7A4.51 4.51 0 0110 2.5h4A4.51 4.51 0 0118.5 7z" />
    </svg>
  );
}

export default SvgMouseLightLine;