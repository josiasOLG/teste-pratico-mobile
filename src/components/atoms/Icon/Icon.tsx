import React from "react";
import { IconButton } from "react-native-paper";

interface IconProps {
  name: string;
  size?: number;
  iconColor?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, iconColor }) => {
  return <IconButton icon={name} size={size} iconColor={iconColor} />;
};

export default Icon;
