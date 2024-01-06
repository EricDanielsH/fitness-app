import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FlatList } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ExerciseList({ data }) {
  const router = useRouter();

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <ExerciseCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
}

const ExerciseCard = ({ router, index, item }) => {
  return (
    <Animated.View entering={FadeInDown.duration(500).delay(index * 100).springify()}>
      <TouchableOpacity className="flex py-3 space-y-2" onPress={() => router.push({pathname: "/exerciseDetails", params: item})}>
        <View className="bg-neutral-200 shadow rounded-[25px]">
          <Image
            source={{ uri: item.gifUrl }}
            contentFit="cover"
            style={{ width: wp(20) * 2.2, height: hp(20) }}
            className="rounded-[25px]"
          />
        </View>
        <Text
          style={{ fontSize: hp(1.5), width: wp(18) * 2.2 }}
          className="font-semibold ml-1"
        >
          {item?.name.charAt(0).toUpperCase() + item?.name.slice(1)}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
