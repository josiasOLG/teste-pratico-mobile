import React from "react";
import { StyleProp, TextStyle } from "react-native";
import { Text as PaperText } from "react-native-paper";

interface TextProps {
  children: React.ReactNode;
  variant?:
    | "displayLarge"
    | "displayMedium"
    | "displaySmall"
    | "headlineLarge"
    | "headlineMedium"
    | "headlineSmall"
    | "titleLarge"
    | "titleMedium"
    | "titleSmall"
    | "labelLarge"
    | "labelMedium"
    | "labelSmall"
    | "bodyLarge"
    | "bodyMedium"
    | "bodySmall";
  style?: StyleProp<TextStyle>;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = "bodyMedium",
  style,
}) => {
  return (
    <PaperText variant={variant} style={style}>
      {children}
    </PaperText>
  );
};

export default Text;
