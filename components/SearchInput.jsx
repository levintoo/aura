import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChange,
  otherStyles,
  keyBoardType,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="mt-0.5 text-base flex-1 text-white font-pregular"
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChange}
        secureTextEntry={title === "Password" && !showPassword}
      />

      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
