import * as React from "react";

function SvgBatteryAlertBoldLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16 3h-2a2 2 0 00-4 0H8a3 3 0 00-3 3v14a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H8a1 1 0 01-1-1V6a1 1 0 011-1h8a1 1 0 011 1zm-5.88-5.25h1.51l.46-6.5h-2.43zm.76 1.35A1.15 1.15 0 1013 17.25a1.14 1.14 0 00-1.12-1.15z" />
    </svg>
  );
}

export default SvgBatteryAlertBoldLine;
