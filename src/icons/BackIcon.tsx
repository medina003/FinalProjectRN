import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={8} height={14} fill="none" {...props}>
    <Path
      stroke="#2D0C57"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 13 1 7l6-6"
    />
  </Svg>
);
export default SvgComponent;
