import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const FoodDetailScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <SafeAreaView className="mx-1">
      <ScrollView>
        <View>
          <Image
            source={{ uri: `${item.image}` }}
            style={{ width: '100%', height: 300 }}
          />
        </View>
        <View className="my-2">
          <Text className="text-2xl font-bold mb-3">{item.name}</Text>
          <Text className="text-justify text-base font-normal mb-0">{item.description}</Text>
          <Text className="text-base font-normal mt-0 pt-0">
            Tiempo de Preparación: {item.time} minutos.
          </Text>
        </View>
        <View className="my-3">
          <Text className="text-lg font-medium mb-2">Ingredientes:</Text>
          {item.ingredients.map((ingr, index) => (
            <Text key={index} className="text-base ml-2">
              - {ingr}
            </Text>
          ))}
        </View>
        <View className="pb-5 mt-2">
          <Text className="text-lg font-medium mb-2">Preparación:</Text>
          {item.preparation.map((prep, index) => (
            <Text key={index} className="text-base ml-2">
              {prep}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};