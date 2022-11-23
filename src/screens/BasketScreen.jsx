import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, {useEffect, useState} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../store/restaurant/RestauranSlice";
import {
  removeFromBasket,
  selectBasket,
  selectBasketTotal,
} from "../store/basket/Basketslice";
import { urlFor } from "../../sanity";

export default function BasketScreen() {
  const [groupItemsBasket, setGroupItemsBasket] = useState([])
  const navigation = useNavigation()

  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasket)
  const basketTotal = useSelector(selectBasketTotal)

  const dispatch = useDispatch()

  useEffect(() => {
   const groupItems = items.reduce((result, item) => {
    (result[item.id] = result[item.id] || []).push(item);
    return result;
   });
   setGroupItemsBasket(groupItems)
  }, [items])
  
  return (
    <SafeAreaView>
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>
          <TouchableOpacity className="rounded-full bg-gray-200 absolute top-3 right-5" onPress={navigation.goBack}>
            Icon
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupItemsBasket).map(([key, items]) => (
          <View className="flex-row items-center space-x-3 bg-white py-2 px-5">
            <Text className="text-[#00CCBB]">{items.length}</Text>
            <Image  source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="h-12 w-12 rounded-full"/>
            <Text className="flex-1">{items[0]?.name}</Text>
            <Text className="text-gray-600">price</Text>
            <TouchableOpacity>
              <Text className="text-[#00CCBB] text-xs" onPress={() => dispatch(removeFromBasket({ id: key }))}>Remove</Text>
            </TouchableOpacity>
          </View>
          ))}
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
