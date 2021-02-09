import * as React from "react";

function SvgOverscanRegularLine(props: any): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M2 4v16h20V4zm19 15H3V5h18zM12 7.16l1.41 1.42.71-.71L12 5.75 9.88 7.87l.71.71zm2.12 9l-.71-.71L12 16.84l-1.41-1.42-.71.71L12 18.25zm3.76-2L20 12l-2.12-2.12-.71.71L18.59 12l-1.42 1.41zm-11-.71L5.41 12l1.42-1.41-.71-.71L4 12l2.12 2.12z"
        data-name="Clear 3"
      />
    </svg>
  );
}

export default SvgOverscanRegularLine;
