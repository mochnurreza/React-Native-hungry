import { ScrollView, Text } from 'react-native'
import React from 'react'
import CategoriesCard from "./cards/CategoriesCard"

export default function Categories() {
  return (
    <ScrollView 
    showHorizontalScrollIndicator={false}
    horizontal
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
    }}>
      <CategoriesCard image="https://links.papareact.com/wru" title="halo" />
      <CategoriesCard image="https://links.papareact.com/wru" title="test" />
      <CategoriesCard image="https://links.papareact.com/wru" title="test" />
      <CategoriesCard image="https://links.papareact.com/wru" title="test" />
    </ScrollView>
  )
}