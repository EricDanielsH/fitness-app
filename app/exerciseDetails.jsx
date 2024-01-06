import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/build/AntDesign";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ExerciseDetails() {
  const router = useRouter();
  const item = useLocalSearchParams();

  return (
    <View className="flex flex-1">
      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-4 z-30 flex items-center justify-center pr-1 rounded-3xl"
        style={{
          height: hp(5.5),
          width: wp(5.5) * 2.1,
          marginTop: hp(4),
          position: "relative",
          top: 0,
          right: 0,
          zIndex: 40,
        }}
      >
        <Icon name="closecircle" size={hp(4)} color="#f43f5e" />
      </TouchableOpacity>

      <Image
        source={item.gifUrl}
        style={{
          width: wp(100),
          height: hp(50),
          position: "absolute",
          zIndex: -1,
        }}
        className="rounded-b-[40px]"
      />

      {/* EXERCISE DETAILS */}
      <ScrollView
        className="space-y-2 mx-4 mt-3"
        style={{ marginTop: hp(42) }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          style={{ fontSize: hp(3.5) }}
          className="font-semibold text-stone-800"
          entering={FadeInDown.duration(300).springify()}
        >
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </Animated.Text>

        <Animated.Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-700"
          entering={FadeInDown.delay(100).duration(300).springify()}
        >
          Equipment:{" "}
          <Text className="font-bold text-neutral-800">{item.equipment}</Text>
        </Animated.Text>

        <Animated.Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-700"
          entering={FadeInDown.delay(200).duration(300).springify()}
        >
          Secondary Musles:{" "}
          <Text className="font-bold text-neutral-800">
            {item.secondaryMuscles}
          </Text>
        </Animated.Text>

        <Animated.Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-700"
          entering={FadeInDown.delay(300).duration(300).springify()}
        >
          Target Muscle:{" "}
          <Text className="font-bold text-neutral-800">{item.target}</Text>
        </Animated.Text>

        <Animated.Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-stone-800"
          entering={FadeInDown.delay(400).duration(300).springify()}
        >
          Instructions
        </Animated.Text>

        {item.instructions.split(".,").map((instruction, index) => {
          return (
            <Animated.Text
              entering={FadeInDown.delay((index + 6) * 100)
                .duration(300)
                .springify()}
              style={{ fontSize: hp(2) }}
              className="text-neutral-800"
              key={instruction}
            >
              {index + 1}. {instruction}{instruction.charAt(instruction.length - 1) !== "." && "."}
            </Animated.Text>
          );
        })}
      </ScrollView>
    </View>
  );
}
