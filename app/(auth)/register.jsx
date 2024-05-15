import { View, Text, ScrollView, Image, Alert } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import PrimaryButton from "../../components/PrimaryButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    if(!form.email || !form.password || !form.username) {
      Alert.alert('Error: Please fill in all required fields')
      return
    }

    setIsLoading(true);

    try {
      const result = await createUser(form.email, form.password, form.username);
      // set result to global state
      router.replace('/home')
    } catch (error) {
      Alert.alert(`Error: Something went wrong ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 py-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white text-semibold font-psemibold mt-10">
            SIgn up to Aura
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChange={(e) => {
              setForm({ ...form, username: e });
            }}
            otherStyles="mt-7"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChange={(e) => {
              setForm({ ...form, email: e });
            }}
            otherStyles="mt-7"
            keyBoardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChange={(e) => {
              setForm({ ...form, password: e });
            }}
            otherStyles="mt-7"
            keyBoardType="password"
          />

          <PrimaryButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100">
              Already have an account?
            </Text>
            <Link
              href="/login"
              className="text-lg text-secondary font-psemibold"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
