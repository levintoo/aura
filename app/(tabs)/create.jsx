import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { ResizeMode, Video } from "expo-av";

import FormField from "../../components/FormField";
import PrimaryButton from "../../components/PrimaryButton";

import { icons } from "../../constants";

const create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    video: null,
    thumbnail: null,
    prompt: "",
  });

  const openPicker = (type) => {
    // const result = await documentPicker;
  };

  const submit = () => {
    // TODO: implement logic
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white font-psemibold">Upload Video</Text>

        <FormField
          title="Video Title"
          value={form.title}
          placeholder="Give your video a catchy title"
          handleChangeTest={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Upload Video
          </Text>

          <TouchableOpacity
            onPress={() => {
              openPicker("video");
            }}
          >
            {form.video ? (
              <Video
                source={{ uri: form.video.uri }}
                className="w-full h-64 rounded-2xl"
                useNativeControls
                resizeMode={ResizeMode.COVER}
                isLooping
              />
            ) : (
              <View className="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center">
                <View className="w-14 h-14 border border-dashed border-secondary-100 justify-center items-center">
                  <Image
                    source={icons.upload}
                    resizeMode="contain"
                    className="h-1/2 w-1/2"
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Upload Thumbnail
          </Text>

          <TouchableOpacity
            onPress={() => {
              openPicker("image");
            }}
          >
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail.uri }}
                className="w-full h-64 rounded-2xl"
                resizeMode="cover"
              />
            ) : (
              <View className="w-full h-16 px-4 bg-black-100 rounded-2xl justify-center items-center border-2 border-black-200 space-x-2 flex-row">
                <Image
                  source={icons.upload}
                  resizeMode="contain"
                  className="h-5 w-5"
                />

                <Text className="text-sm text-gray-100 font-pmedium">
                  Choose a thumbnail
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <FormField
          title="AI Prompt"
          value={form.prompt}
          placeholder="The prompt you used to generate this video"
          handleChangeTest={(e) => setForm({ ...form, prompt: e })}
          otherStyles="mt-7"
        />

        <PrimaryButton
          title="Submit & Publish"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default create;
