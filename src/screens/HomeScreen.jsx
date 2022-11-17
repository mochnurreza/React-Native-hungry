import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";
import Feature from "../components/Feature";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View>
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-lg">Current Location</Text>
        </View>
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-3 rounded-xl w-full">
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
      </View>
      <ScrollView className="bg-gray-100"
      contentContainerStyle={{
        paddingBottom: 100
      }}>
          {/* categories */}
          <Categories/>
          <Feature/>
      </ScrollView>
    </SafeAreaView>
  );
};
