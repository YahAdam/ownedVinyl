export default function Plus({
  height = "30",
  width = "30",
  color = "#000000",
}) {
  return (
    <svg
      fill={color}
      height={`${height}px`}
      width={`${width}px`}
      viewBox="-2.4 -2.4 28.80 28.80"
      transform="matrix(1, 0, 0, -1, 0, 0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.048"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M4 12H20M12 4V20"
          stroke="#000000"
          strokeWidth="1.9200000000000004"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
