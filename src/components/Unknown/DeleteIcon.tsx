import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const DeleteIcon = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Path d="M10 2 9 3H3v2h1.11l1.783 15.256v.008A2.011 2.011 0 0 0 7.875 22h8.248c.995 0 1.851-.75 1.982-1.736l.002-.008L19.891 5H21V3h-6l-1-1h-4zM6.125 5h11.75l-1.752 15H7.875L6.125 5z" />
  </Svg>
);
export default DeleteIcon;
