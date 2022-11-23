import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

export default function RestauranScreen() {
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="h-56 w-full bg-gray-300 p-4"
        />
        <TouchableOpacity className="absolute top-14 left-5 bg-gray-100 p-2 rounded-full">
          {/* icon arrow left */}
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">title</Text>
          <View className="flex-row items-center space-x-1">
            {/* star icon */}
          </View>
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">rating</Text> · genre
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
