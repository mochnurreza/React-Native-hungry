import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export const Basket = () => {
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row">
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">Basket</Text>
        <Text className="flex-1 text-white font-extrabold tex-lg text-center">
            View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
            currency
        </Text>
      </TouchableOpacity>
    </View>
  )
}