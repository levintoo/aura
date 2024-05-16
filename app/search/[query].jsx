import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";

import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import { searchPost } from "../../lib/appwrite";
import useAppWrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { useLocalSearchParams } from "expo-router";

const search = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppWrite(() => searchPost(query));

  useEffect(() => {
    refetch();
  }, [query]);

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
          <View className="my-6 px-4">
            <Text className="text-sm text-gray-100 font-pmedium">
              Search results for
            </Text>
            <Text className="text-2xl font-psemibold text-white">{query}</Text>

            <View className="mt-6 mb-8">
              <SearchInput initialQuery={query} />
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

export default search;
