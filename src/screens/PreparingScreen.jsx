import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function PreparingScreen() {
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
    {/* <Animatable.Image
      source={require("../assets/orderLoading.gif")}
      animation="slideInUp"
      iterationCount={1}
      className="h-96 w-96"
    />

    <Animatable.Text
      animation="slideInUp"
      iterationCount={1}
      className="text-lg my-10 text-white font-bold text-center"
    >
      Wating for Restaurant to accept your order!
    </Animatable.Text> */}

    {/* <Progress.Circle size={60} indeterminate={true} color="white" /> */}
  </SafeAreaView>
  )
}