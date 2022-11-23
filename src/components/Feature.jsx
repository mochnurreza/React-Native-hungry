import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import RestaurantCard from "./cards/RestaurantCard";
import sanityClient from "../../sanity";

export default function Feature({ id, title, description }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'featured' && _id ==  ${id}] {..., restauranst[] -> {..., dishes[] ->, type -> { name }},}[0]`,
        { id }
      )
      .then(( data ) => {
        console.log("restauranst:", data);
        setRestaurants(data);
      })
      .catch((error) => {
        console.log("error from feature:", error);
      });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((restaurant, i) => {
          <RestaurantCard
            key={`${restauran._id}-${i}`}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={retaurant.type?.name}
            address={restaurant.address}
            shortDescription={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />;
        })}
      </ScrollView>
    </View>
  );
}
