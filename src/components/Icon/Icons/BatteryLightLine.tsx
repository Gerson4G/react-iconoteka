import * as React from "react";

function SvgBatteryLightLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16.5 3H14a2 2 0 00-4 0H7.5A2.5 2.5 0 005 5.5v15A2.5 2.5 0 007.5 23h9a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0016.5 3zM12 1.5A1.5 1.5 0 0113.5 3h-3A1.5 1.5 0 0112 1.5zm6.5 19a2 2 0 01-2 2h-9a2 2 0 01-2-2v-15a2 2 0 012-2h9a2 2 0 012 2zm-6.25-14h-.5v2.25H9.5v.5h2.25v2.25h.5V9.25h2.25v-.5h-2.25zM9.5 17.25h5v-.5h-5z" />
    </svg>
  );
}

export default SvgBatteryLightLine;