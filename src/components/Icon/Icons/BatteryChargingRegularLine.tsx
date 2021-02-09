import * as React from "react";

function SvgBatteryChargingRegularLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16.5 3H14a2 2 0 00-4 0H7.5A2.5 2.5 0 005 5.5v15A2.5 2.5 0 007.5 23h9a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0016.5 3zM12 2a1 1 0 011 1h-2a1 1 0 011-1zm6 18.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 20.5v-15A1.5 1.5 0 017.5 4h9A1.5 1.5 0 0118 5.5zM12.35 8.84h-1.5l-2 5.66h2.83v2.66h1.5l2-5.66h-2.83zM14 12.35l-1.42 4h-.08v-2.7H10l1.42-4h.05v2.66z" />
    </svg>
  );
}

export default SvgBatteryChargingRegularLine;
