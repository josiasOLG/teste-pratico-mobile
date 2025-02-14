import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { IconButton } from "react-native-paper";

interface NotificationIconProps {
  count: number;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({ count }) => {
  return (
    <View style={styles.container}>
      <IconButton icon="bell-outline" size={24} iconColor="#333" />
      {count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "red",
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default NotificationIcon;
