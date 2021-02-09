import * as React from "react";

function SvgViewCarouselRegularLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 5h-4V3H6v2H2v14h4v2h12v-2h4zM3 18V6h3v12zm14 2H7V4h10zm4-2h-3V6h3z" />
    </svg>
  );
}

export default SvgViewCarouselRegularLine;
