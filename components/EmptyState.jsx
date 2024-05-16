import { View, Text, Image } from "react-native";

import { images } from "../constants";
import PrimaryButton from "../components/PrimaryButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />

      <Text className="text-xl text-white mt-2 font-psemibold">{title}</Text>

      <Text className="text-sm text-center mt-2 font-pmedium text-gray-100">
        {subtitle}
      </Text>

      <PrimaryButton title="Create Video" handlePress={() => router.push('/create')} containerStyles="w-full my-5" />
    </View>
  );
};

export default EmptyState;
