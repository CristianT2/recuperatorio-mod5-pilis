import React from "react";
import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const SearchBar = ({ handleSearch, searchQuery }) => {

  return (
    <View className="flex-row m-2 px-2 items-center rounded-3xl bg-white"> 
      <Ionicons name="search-circle" size={35} color="indigo" />
      <TextInput
        placeholder="Que comida te gustaria conocer?"
        onChangeText={handleSearch}
        value={searchQuery}
        className="text-lg ml-1"
      />
    </View>
  );
};