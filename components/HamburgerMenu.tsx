function HamburgerMenu({
  width,
  height = (76 / 150) * width,
}: {
  width: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 142 80`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1" x2={width} y2="1" stroke="black" stroke-width="5" />
      <line y1="39" x2={width} y2="39" stroke="black" stroke-width="5" />
      <line y1="75" x2={width} y2="75" stroke="black" stroke-width="5" />
    </svg>
  );
}

export default HamburgerMenu;
