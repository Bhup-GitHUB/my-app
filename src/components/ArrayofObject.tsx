import React from "react";
import { View, FlatList, Text } from "react-native";

const ArrayofObject = () => {
  const locations = [
    {
      id: 1,
      name: "London",
      country: "UK",
    },
    {
      id: 2,
      name: "Paris",
      country: "France",
    },
    {
      id: 3,
      name: "New York",
      country: "USA",
    },
  ];

  return (
    //no need to use Fragment here
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={locations}
        renderItem={({ item }) => { 
          return (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.country}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ArrayofObject;
