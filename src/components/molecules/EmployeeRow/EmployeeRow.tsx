import Avatar from "@/components/atoms/Avatar/Avatar";
import Icon from "@/components/atoms/Icon/Icon";
import Text from "@/components/atoms/Text/Text";
import React from "react";
import { StyleSheet } from "react-native";

import { DataTable } from "react-native-paper";

interface EmployeeRowProps {
  name: string;
  image: string;
  role: string;
}

const EmployeeRow: React.FC<EmployeeRowProps> = ({ name, image, role }) => {
  return (
    <DataTable.Row style={styles.row}>
      <DataTable.Cell style={styles.picture}>
        <Avatar image={image} />
      </DataTable.Cell>
      <DataTable.Cell style={styles.name}>
        <Text variant="bodyMedium">{name}</Text>
      </DataTable.Cell>
      <DataTable.Cell style={styles.iconColumn}>
        <Icon name="chevron-down" size={30} iconColor={"#1510ff"} />
      </DataTable.Cell>
    </DataTable.Row>
  );
};

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingVertical: 0,
    paddingRight: 5,
  },
  picture: {
    flex: 0.6,
  },
  name: { flex: 1 },
  iconColumn: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default EmployeeRow;
