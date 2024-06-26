import * as React from "react";
const Pencil = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={"10vw"}
    height={"10vh"}
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="#F9EBB2"
      d="M3.001 61.999a.998.998 0 0 1-1-.999l.001-13.141L16.143 62l-13.142-.001z"
    />
    <path
      fill="#F76D57"
      d="m61.414 16.729-4.259 4.259L43.013 6.845l4.258-4.257a2 2 0 0 1 2.829-.002L61.414 13.9c.781.782.78 2.047 0 2.829z"
    />
    <path
      fill="#F9EBB2"
      d="M41.6 8.259 55.741 22.4l-2.828 2.829L38.77 11.087z"
    />
    <g fill="#45AAB8">
      <path d="M3.414 46.444 37.356 12.5l3.536 3.537L6.95 49.98zM14.022 57.05l33.94-33.94 3.535 3.534-33.94 33.941zM8.364 51.394l33.942-33.942 4.242 4.242-33.942 33.941z" />
    </g>
    <path
      fill="#231F20"
      d="M40.892 16.037 6.951 49.979l-3.536-3.536 33.942-33.941zM47.963 23.109l3.535 3.534-33.94 33.941-3.536-3.535z"
      opacity={0.2}
    />
    <path
      fill="#394240"
      d="M62.828 12.486 51.514 1.172a4 4 0 0 0-5.657.001L.602 46.428C-.006 47.035 0 48 0 48l.001 13.999c0 1.105.896 2 1.999 2.001h14s.963.008 1.572-.602l45.256-45.257a3.994 3.994 0 0 0 0-5.655zM2.001 61v-1.583l2.582 2.582H3.001a.998.998 0 0 1-1-.999zm5.41 1-5.41-5.41.001-8.73L16.143 62H7.411zm45.501-36.77L38.771 11.088l-1.414 1.414 3.535 3.535L6.951 49.979l1.414 1.414 33.94-33.941 4.243 4.243-33.941 33.94 1.414 1.415 33.941-33.94 3.535 3.535-33.94 33.941L3.414 46.443 41.599 8.259l14.143 14.143-2.83 2.828zm8.502-8.501-4.259 4.259L43.013 6.845l4.258-4.257a2 2 0 0 1 2.829-.002L61.414 13.9c.781.782.78 2.047 0 2.829z"
    />
  </svg>
);
export default Pencil;
