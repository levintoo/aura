import { View, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import EmptyState from "../../components/EmptyState";
import { getUserPosts, signOut } from "../../lib/appwrite";
import useAppWrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { useGlobalContext } from "../../context/GlobalProvider";
import { icons } from "../../constants";
import InfoBox from "../../components/InfoBox";

const profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts } = useAppWrite(() => getUserPosts(user.$id));

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);
    router.replace("/login");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View>
            <VideoCard video={item} />
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={logout}
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="h-[90%] w-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            <View className="mt-5 flex-row">
              <InfoBox
                title={posts.length || 0}
                subtitle="posts"
                containerStyles="mr-10"
                titleStyles="text-xl"
              />
              <InfoBox
                title="1.2k"
                subtitle="followers"
                titleStyles="text-xl"
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found for this search query"
            subtitle="Be the first one to upload a video"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default profile;
