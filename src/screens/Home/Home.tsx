import { SearchInput } from "@/components/atoms";
import { EmployeeTable } from "@/components/organisms";
import { getEmployees, useAppDispatch, useAppSelector } from "@/redux";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.employees);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const filteredData = data.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.job.toLowerCase().includes(search.toLowerCase()) ||
      emp.phone.includes(search)
  );

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        Funcionários
      </Text>
      <SearchInput
        placeholder="Pesquisar"
        value={search}
        onChangeText={setSearch}
      />
      {loading && <Text>Carregando...</Text>}
      {/* {error && <Text style={styles.error}>{error}</Text>} */}
      <EmployeeTable data={filteredData} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { marginBottom: 0, fontWeight: "700" },
  error: { color: "red", marginVertical: 8 },
});
