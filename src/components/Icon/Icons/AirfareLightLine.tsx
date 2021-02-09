import * as React from "react";

function SvgAirfareLightLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M1 5v14h22V5zm21.5 13.5h-21v-13h21zM9.86 13h1.44l-.58 3h1.39l1.56-3h1.83a1 1 0 100-2h-1.83l-1.56-3h-1.39l.58 3H9.86l-.67-1h-1v4h1zm-1.17.52v-3h.23l.52.79.15.22h2.32l-.12-.6-.47-2.4h.48l1.42 2.73.14.27h2.14a.49.49 0 110 1h-2.14l-.14.27-1.42 2.63h-.48l.47-2.38.12-.6H9.59l-.15.23-.52.79z" />
    </svg>
  );
}

export default SvgAirfareLightLine;
