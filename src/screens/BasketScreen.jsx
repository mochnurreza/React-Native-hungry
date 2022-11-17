import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

export default function BasketScreen() {
  return (
    <SafeAreaView>
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">Restauran title</Text>
          </View>
          <TouchableOpacity className="rounded-full bg-gray-200 absolute top-3 right-5">
            Icon
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          <View className="flex-row items-center space-x-3 bg-white py-2 px-5">
            <Text className="text-[#00CCBB]">item.length</Text>
            <Image />
            <Text className="flex-1">item name</Text>
            <Text className="text-gray-600">price</Text>
            <TouchableOpacity>
              <Text className="text-[#00CCBB] text-xs">Remove</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">price</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery fee</Text>
            <Text className="text-gray-400">price</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
                price
            </Text>
            <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4">
                <Text className="text-center text-white text-lg font-bold">
                    Place order
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
