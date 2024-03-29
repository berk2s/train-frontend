import React from "react";

interface IconProps {
  color: string;
  width: number;
  height: number;
}

function ThreeDotIcon(props: IconProps) {
  return (
    <svg
      fill={props.color}
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      className="bi bi-three-dots-vertical"
      viewBox="0 0 16 16"
    >
      <path d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
    </svg>
  );
}

export default ThreeDotIcon;
