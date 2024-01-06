import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-virtualized-view";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodyPart } from "../api/exerciseDB";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/build/Ionicons";
import ExerciseList from "../components/ExerciseList";

export default function Exercises() {
  const router = useRouter();
  const [exercises, setExercises] = useState([]);
  const item = useLocalSearchParams(); // Passing item data through the router

  const getExercises = async (bodyPart) => {
    const data = await fetchExercisesByBodyPart(bodyPart);
    setExercises(data);
  };

  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item]);

  return (
    <ScrollView>
      <StatusBar style="ligth" />

      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-400 mx-4 z-30 flex items-center justify-center pr-1 rounded-3xl"
        style={{
          height: hp(5.5),
          width: wp(5.5) * 2.1,
          marginTop: hp(7),
          position: "relative",
          top: 0,
          left: 0,
          zIndex: 40,
        }}
      >
        <Icon name="caret-back-outline" size={hp(3)} color="white" />
      </TouchableOpacity>

      <Image
        source={item.image}
        style={{
          width: wp(100),
          height: hp(40),
          position: "absolute",
          zIndex: -1,
        }}
        className="rounded-b-[40px]"
      />

      {/* Exercises */}
      <View className="mx-4 space-y-3" style={{ marginTop: hp(30) }}>
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700"
        >
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)} exercises{" "}
        </Text>
        <View className="mb-10">
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}
