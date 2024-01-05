import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Exercises() {
  const router = useRouter();
  const item = useLocalSearchParams(); // Passing item data through the router

  return (
    <View className="mt-20">
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-200"
      >
        <Text>Go back</Text>
      </TouchableOpacity>
      <Text style={{fontSize: hp(3.5)}}>Exercises for {item.name}</Text>
    </View>
  );
}
