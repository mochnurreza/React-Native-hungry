import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBasket,
  selectBasketItemsWithId,
  addToBasket,
  removeFromBasket,
} from "../store/basket/Basketslice";

export default function DishRow({ id, name, description, price, image }) {
  const [isPressed, setIsPressed] = useState(false);

  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItem = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="text-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">{price}</Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{ uri: urlFor(image).url() }}
              className="w-20 h-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity disabled={!items.length} onPress={removeItem}>
              {/* icon minus */}
            </TouchableOpacity>
            <Text className="">{items?.length}</Text>
            <TouchableOpacity>{/* icon add */}</TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
