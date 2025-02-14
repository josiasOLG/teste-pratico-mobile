import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <TextInput
      mode="outlined"
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      outlineStyle={styles.outline}
      left={<TextInput.Icon icon="magnify" />}
      theme={{ colors: { surfaceVariant: "#9c9b9b" } }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 8,
    marginBottom: 20,
  },
  outline: {
    borderRadius: 50,
  },
});

export default SearchInput;
