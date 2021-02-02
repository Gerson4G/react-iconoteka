import * as React from 'react';

function SvgButtonWithTextRegularLine(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M18 7H6a5 5 0 000 10h12a5 5 0 000-10zm0 9H6a4 4 0 010-8h12a4 4 0 010 8zM7 12.5h10v-1H7z"
        data-name="Clear 3"
      />
    </svg>
  );
}

export default SvgButtonWithTextRegularLine;
