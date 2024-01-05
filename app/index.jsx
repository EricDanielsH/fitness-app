import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/welcome.png")}
      />
      <LinearGradient
        colors={["transparent", "#18181B"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(150).springify()}
          className="flex items-center"
        >
          <Text
            className="text-white font-bold tracking-wide"
            style={{ fontSize: hp(4) }}
          >
            Best <Text className="text-rose-400">Workouts</Text>
          </Text>
          <Text
            className="text-white font-bold tracking-wide"
            style={{ fontSize: hp(4) }}
          >
            For you
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(300).springify()}
          className="flex items-center"
        >
          <TouchableOpacity
            onPress={() => router.push("home")}
            className="bg-rose-400 flex items-center justify-center rounded-full border-[3px] border-neutral-200"
            style={{ height: hp(7), width: wp(80) }}
          >
            <Text className="text-white font-bold" style={{ fontSize: hp(2) }}>
              GET STARTED
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
