import React, { useEffect, useState } from "react";
import { getRecipesList } from "../../api/recipe.service";
import { FlatList, Pressable, View, Text, Image } from "react-native";
import { SearchBar } from "../../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";

export const FoodListScreen = ({ navigation }) => {

  const [foodList, setFoodList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getRecipesList()
      .then(data => setFoodList(data))
      .catch(err => console.log(err))
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query)
  };

  const filteredFoods = foodList.filter(food => (
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  ));

  const foodCard = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('FoodDetail',{ item })} className="m-2 bg-white rounded-xl">
      <View className="px-1 pt-2 pb-2">
        <Image source={{ uri: `${item.image}` }} style={{ width: '100%', height: 250 }} className="rounded-lg"/>
        <Text className="my-2 ml-2 font-medium text-xl">{item.name}</Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView className="bg-slate-200">
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredFoods}
        renderItem={foodCard}
        keyExtractor={item => item.id}
        className="mb-14"
      />
    </SafeAreaView>
  );
};