import { View, Text, FlatList } from "react-native";
import React from "react";

const Flaatlist = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

  return (
    <View>
      <FlatList
        data={fruits}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default Flaatlist;
