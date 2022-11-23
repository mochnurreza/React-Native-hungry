import { FlatList, Text } from "react-native";
import React, { useState, useEffect } from "react";
import CategoriesCard from "./cards/CategoriesCard";
import sanityClient, { urlFor } from "../../sanity";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "category"]`)
      .then((data) => {
        console.log("categories:", data);
        setCategories(data);
      })
      .catch((error) => {
        consol.log("error from categories", error);
      });
  }, []);

  return (
    <FlatList
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category) => (
        <CategoriesCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </FlatList>
  );
}
