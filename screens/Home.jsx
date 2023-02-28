import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-green-500">HOME</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
