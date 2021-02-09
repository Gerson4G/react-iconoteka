import * as React from "react";

function SvgRhombusLightLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 .78L21.35 12 12 23.22 2.65 12 12 .78M12 0L2 12l10 12 10-12L12 0z" />
    </svg>
  );
}

export default SvgRhombusLightLine;
