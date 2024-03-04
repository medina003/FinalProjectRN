import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const BackIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      stroke="#2D0C57"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 13 1 7l6-6"
    />
  </Svg>
);
export default BackIcon;
