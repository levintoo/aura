import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";

import { images } from "../constants";
import PrimaryButton from "../components/PrimaryButton";
import {useGlobalContext} from "../context/GlobalProvider";

export default function Index() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w--[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless {"\n"} Posibilities with{" "}
              <Text className="text-secondary-200">Aura</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[70px] h-[15px] absolute -bottom-2 -right-0"
              resizeMode="contaion"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 text-center mt-7">
            Where innovation meets creativity: embark on a journey {"\n"} of
            limitless exploration with aura.
          </Text>

          <PrimaryButton
            title="Continue with Email"
            handlePress={() => {
              router.push("/login");
            }}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
