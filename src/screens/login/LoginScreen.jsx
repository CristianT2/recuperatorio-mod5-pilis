import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../contexts/UserContext";
import { Controller, useForm } from "react-hook-form";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { getUsers } from "../../api/user.service";

export const LoginScreen = () => {

  const navigation = useNavigation();
  const { setCurrentUser } = useContext(UserContext);
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const handleLogin = ({ username, password }) => {
    getUsers()
      .then(users => {
        const user = users[0]
        if (username === user.username && password === user.password) {
          setCurrentUser({ username, password })
          navigation.navigate('Home')
        }
      })
      .catch(err => console.warn(err))
  }
  return (
    <View className="justify-items-center mx-auto mt-40 p-10 border-solid border-2 border-indigo-950 rounded-lg">
      <Text className="mx-auto font-bold text-3xl  mb-8">Iniciar Sesión</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Usuario"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            className="mx-auto w-44 border-solid border-2 rounded-xl text-lg py-2 px-2 font-medium text-center mb-4"
          />
        )}
        name="username"
      />
      {errors.username && <Text>El nombre de usuario es requerido</Text>}

      <Controller
        control={control}
        rules={{
         required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Contraseña"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            className="mx-auto w-44 border-solid border-2 rounded-xl text-lg py-2 px-2 font-medium text-center mb-4"
          />
        )}
        name="password"
      />
      {errors.password && <Text>La contraseña es requerida</Text>}

      <TouchableOpacity onPress={handleSubmit(handleLogin)} className="mx-auto mt-4 rounded-3xl px-4 py-1 bg-indigo-950">
        <Text className="font-medium text-lg text-white">Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};