import { View, Text, SafeareaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function DeliveryScreen() {
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
            <TouchableOpacity>
                {/* icon close */}
            </TouchableOpacity>
            <Text className="font-light text-white text-lg"> Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-20 shadow-md">
            <View className="flex-row justify-between">
                <View>
                    <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                    <Text className="text-4xl font-bold">45-55 Minutes</Text>
                </View>
                <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
            </View>
            {/* progress bar */}
            <Text className="text-gray-500 mt-3">
            Your order at restaurant is being prepared
          </Text>
        </View>
      </SafeAreaView>
      {/* map view from react-map package */}
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
      <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
            <Text className="text-lg">Asep Ngehe</Text>
            <Text className="text-gray-400">Your driver</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  )
}