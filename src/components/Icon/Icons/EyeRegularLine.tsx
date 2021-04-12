import * as React from "react";

function SvgEyeRegularLine(props: any): JSX.Element {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 4.622A12.906 12.906 0 00.344 12a12.896 12.896 0 0023.312 0A12.906 12.906 0 0012 4.622zm0 13.756A11.979 11.979 0 011.462 12a11.894 11.894 0 0121.076 0A11.978 11.978 0 0112 18.378zm0-10.042a3.664 3.664 0 100 7.328 3.664 3.664 0 000-7.328zm0 6.328a2.664 2.664 0 110-5.329 2.664 2.664 0 010 5.33z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgEyeRegularLine;
