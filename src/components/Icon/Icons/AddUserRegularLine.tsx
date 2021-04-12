import * as React from "react";

function SvgAddUserRegularLine(props: any): JSX.Element {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.5 8.5V5.553h-1V8.5h-2.947v1H18.5v2.947h1V9.5h2.947v-1H19.5zm-10 1.166a3.667 3.667 0 100-7.333 3.667 3.667 0 000 7.333zm0-6.333a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334zm0 8.379A10.185 10.185 0 002.275 14.7L2 14.975V20h15v-5.025l-.275-.275A10.187 10.187 0 009.5 11.712zM16 19H3v-3.606c.012-.01.109-.107.12-.117a9.214 9.214 0 0112.76 0l.12.117V19z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgAddUserRegularLine;
