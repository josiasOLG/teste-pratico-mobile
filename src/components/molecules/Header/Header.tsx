import Avatar from "@/components/atoms/Avatar/Avatar";
import NotificationIcon from "@/components/atoms/NotificationIcon/NotificationIcon";
import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

interface HeaderProps {
  backgroundColor?: string;
  statusBarStyle?: "light-content" | "dark-content";
  avatarInitials: string;
  avatarImage?: string;
  notificationCount: number;
}

const Header: React.FC<HeaderProps> = ({
  backgroundColor = "#fff",
  statusBarStyle = "light-content",
  avatarInitials,
  avatarImage,
  notificationCount,
}) => {
  return (
    <View style={[styles.header, { backgroundColor }]}>
      <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundColor} />
      <Avatar initials={avatarInitials} image={""} />
      <NotificationIcon count={notificationCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 40,
  },
});

export default Header;
