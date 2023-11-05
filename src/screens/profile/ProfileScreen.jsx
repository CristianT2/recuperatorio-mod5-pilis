import { useContext } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { UserContext } from "../../contexts/UserContext"
import { LoginScreen } from "../login/LoginScreen"

export const ProfileScreen = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const handleLogout = () => {
    setCurrentUser(null)
  }

  return (
    <SafeAreaView>
      { currentUser
          ?(
            <View>
              <Text className="mt-5 pl-2 font-medium text-2xl">Bienvenido {currentUser.username}</Text>
              <TouchableOpacity  onPress={handleLogout} className="mx-auto mt-4 rounded-3xl px-4 py-1 bg-indigo-950">
                <Text className="font-medium text-lg text-white">Salir</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <LoginScreen />
          )

      }
    </SafeAreaView>
  )
}