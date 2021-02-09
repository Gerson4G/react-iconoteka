import * as React from "react";

function SvgViewModuleRegularLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M15.67 4H2v16h20V4zm-1 1v6.5H9.33V5zM3 5h5.33v6.5H3zm0 14v-6.5h5.33V19zm6.33 0v-6.5h5.34V19zM21 19h-5.33v-6.5H21zm-5.33-7.5V5H21v6.5z" />
    </svg>
  );
}

export default SvgViewModuleRegularLine;
