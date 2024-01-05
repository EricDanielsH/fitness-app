import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Ionicon from "react-native-vector-icons/build/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    // Use safe area to not have problems with notchs, etc
    <SafeAreaView
      className="bg-slate-500 flex-1 flex space-y-5"
      edges={["top"]}
    >
      <StatusBar style="dark"></StatusBar>

      {/* Punchline and avatar */}
      <View className="flex flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold text-rose-400 tracking-wider"
          >
            WORKOUT
          </Text>
        </View>
        <View className="space-y-2 flex justify-center items-center ">
          <Image
            source={require("../assets/images/avatar.jpeg")}
            style={{ height: hp(6), width: wp(6) * 2.2 }}
            className="rounded-full"
          />
          <View
            className="bg-neutral-200 flex justify-center items-center rounded-full border-[3px] border-neutral-300"
            style={{ height: hp(5.5), width: wp(5.5) * 2.2 }}
          >
            <Ionicon name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/* IMAGE CARRUSEL */}
      <View>
        <ImageSlider />
      </View>

    </SafeAreaView>
  );
}
