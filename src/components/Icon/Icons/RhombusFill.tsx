import * as React from "react";

function SvgRhombusFill(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 0L2 12l10 12 10-12L12 0z" />
    </svg>
  );
}

export default SvgRhombusFill;
