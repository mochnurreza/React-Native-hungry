import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import {selectBasket, selectBasketTotal} from "../store/basket/Basketslice";
import { useSelector } from "react-redux";

export const Basket = () => {
  const navigation = useNavigation()
  const items = useSelector(selectBasket)
  const basketTotal = useSelector(selectBasketTotal)

  if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row" onPress={() => navigation.navigate("Basket")}>
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
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