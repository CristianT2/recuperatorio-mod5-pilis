import React from "react";
import { Text, SafeAreaView, ImageBackground, Dimensions } from "react-native"

export const HomeScreen = () => {

  let ScreenHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../../assets/portada.png')}
        mageStyle={{ resizeMode: 'stretch' }}
        style={{
          width: '100%',
          height: ScreenHeight,
        }}
      >
        <Text className="m-auto pt-12 text-4xl font-extrabold text-white text-center w-9|/12">
          Conocé la Gastronomía de Jujuy
        </Text>
      </ImageBackground>
    </SafeAreaView>
  )
}