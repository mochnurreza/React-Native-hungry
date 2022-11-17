import { View, Text, ScrollView } from "react-native";
import React from "react";
import RestaurantCard from "./cards/RestaurantCard"

export default function Feature() {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">title</Text>
      </View>
      <Text className="text-xs text-gray-500 px-4">Description</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard/>
      </ScrollView>
    </View>
  );
};
