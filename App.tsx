import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux";
import { AppNavigator } from "./src/navigation";
import Header from "@/components/molecules/Header/Header";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header avatarInitials="CG" avatarImage="" notificationCount={3} />
        <StatusBar style="dark" />
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
