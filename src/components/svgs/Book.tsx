import * as React from "react";

const Book = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={80}
    height={80}
    viewBox="0 0 64 64"
    {...props}
  >
    <path fill="#F9EBB2" d="M56 62H10a4 4 0 0 1 0-8h46v8z" />
    <g fill="#45AAB8">
      <path d="M6 4v49.537A5.968 5.968 0 0 1 10 52h2V2H8a2 2 0 0 0-2 2zM56 2H14v50h44V4a2 2 0 0 0-2-2z" />
    </g>
    <g fill="#394240">
      <path d="M60 52V4c0-2.211-1.789-4-4-4H8C5.789 0 4 1.789 4 4v54a6 6 0 0 0 6 6h49a1 1 0 1 0 0-2h-1v-8a2 2 0 0 0 2-2zM6 4a2 2 0 0 1 2-2h4v50h-2a5.968 5.968 0 0 0-4 1.537V4zm50 58H10a4 4 0 0 1 0-8h46v8zm0-10H14V2h42a2 2 0 0 1 2 2v48h-2z" />
      <path d="M43 26H23a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2zM49 20H23a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2zM23 16h12a1 1 0 1 0 0-2H23a1 1 0 1 0 0 2z" />
    </g>
    <path
      fill="#231F20"
      d="M6 4v49.537A5.968 5.968 0 0 1 10 52h2V2H8a2 2 0 0 0-2 2z"
      opacity={0.2}
    />
  </svg>
);
export default Book;
