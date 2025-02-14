import React from "react";
import { Avatar as PaperAvatar } from "react-native-paper";

interface AvatarProps {
  initials?: string;
  image?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ initials = "", image, size = 40 }) => {
  if (image) {
    return <PaperAvatar.Image size={size} source={{ uri: image }} />;
  } else {
    return (
      <PaperAvatar.Text
        size={30}
        label={initials}
        color="#333"
        style={{
          backgroundColor: "#e3e3e3",
          width: 40,
          height: 40,
          borderRadius: 50,
        }}
      />
    );
  }
};

export default Avatar;
