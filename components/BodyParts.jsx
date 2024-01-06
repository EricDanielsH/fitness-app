import { View, Text, Image } from "react-native";
import React from "react";
import { bodyParts } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function BodyParts() {
  const router = useRouter();

  return (
    <View className="mx-4">
      <Text style={{ fontSize: hp(3) }} className="font-bold text-neutral-700">
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index}) => (
          <BodyPartCard item={item} index={index} router={router} />
        )}
      />
    </View>
  );
}

const BodyPartCard = ({ item, index, router }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/exercises", params: item })}
        style={{ width: wp(20) * 2.1, height: hp(20) }}
        className="flex justify-end p-4 mb-4"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: wp(20) * 2.1, height: hp(20) }}
          className="rounded-3xl absolute"
        />

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{ width: wp(20) * 2.1, height: hp(5) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-b-3xl"
        >
          <Text
            className="text-white text-center font-semibold tracking-wide"
            style={{ fontSize: hp(2.3) }}
          >
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
