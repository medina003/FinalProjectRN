import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const BasketIcon = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 80 80" {...props}>
    <Path
      stroke="#9586A8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.286 4.167H18.57l-1.428 8.571H5.714L4.286 4.167ZM7.143 17.5a.952.952 0 1 0 0-1.905.952.952 0 0 0 0 1.905ZM15.714 17.5a.952.952 0 1 0 0-1.905.952.952 0 0 0 0 1.905Z"
    />
    <Path
      stroke="#9586A8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.286 4.167H1.428"
    />
  </Svg>
);
export default BasketIcon;
