import * as React from "react";

function SvgDomainRegularLine(props: any): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 19a9 9 0 119-9 9 9 0 01-9 9zM8 10.29V15h8v-4.71L12 8zM15 14H9v-3.13l3-1.74 3 1.74z" />
    </svg>
  );
}

export default SvgDomainRegularLine;
