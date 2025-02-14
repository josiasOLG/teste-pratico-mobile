import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import Text from "../atoms/Text/Text";
import Icon from "../atoms/Icon/Icon";
import EmployeeRow from "../molecules/EmployeeRow/EmployeeRow";

interface Employee {
  id: number;
  name: string;
  image: string;
  job: string;
}

interface EmployeeTableProps {
  data: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ data }) => {
  return (
    <ScrollView>
      <DataTable style={styles.table}>
        <DataTable.Header style={styles.header}>
          <DataTable.Title style={styles.picture}>
            <Text variant="bodyLarge" style={styles.headerText}>
              Foto
            </Text>
          </DataTable.Title>
          <DataTable.Title style={styles.name}>
            <Text variant="bodyLarge" style={styles.headerText}>
              Nome
            </Text>
          </DataTable.Title>
          <DataTable.Title style={styles.iconColumn}>
            <Icon name="circle" size={10} />
          </DataTable.Title>
        </DataTable.Header>

        {data.map((employee) => (
          <EmployeeRow
            key={employee.id}
            name={employee.name}
            image={employee.image}
            role={employee.job}
          />
        ))}
      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
  },
  header: {
    backgroundColor: "#edeffb",
    borderBottomWidth: 1,
    borderBottomColor: "#edeffb",
    paddingHorizontal: 20,
  },
  headerText: {
    fontWeight: "bold",
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

export default EmployeeTable;
