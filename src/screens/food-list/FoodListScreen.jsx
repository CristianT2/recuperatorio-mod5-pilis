import React, { useEffect, useState } from "react";
import { getRecipesList } from "../../api/recipe.service";
import { FlatList, Pressable, SafeAreaView, View, Text, Image, Button } from "react-native";

export const FoodListScreen = ({ navigation }) => {

  const [foodList, setFoodList] = useState([]);

  const changeColor = () => {
    console.log("hola");
  }

  useEffect(() => {
    getRecipesList()
      .then(data => setFoodList(data))
      .catch(err => console.log(err))
  }, []);

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
      <FlatList
        data={foodList}
        renderItem={foodCard}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};