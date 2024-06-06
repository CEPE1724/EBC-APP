import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {CarritoScreen} from "../screens/CarritoScreen";
import {UsersScreen} from "../screens/UsersScreen/UsersScreen";
import { screen } from "../utils";
import HeaderIcons from "../components/HeaderIcons";
const Stack = createNativeStackNavigator();

export function CarritoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.carrito.carritos}
        component={CarritoScreen}
        options={{ title: "Carrito",
          headerRight: () => (
            <HeaderIcons
              showSearch={false}
              showSettings={true}
              onSearchPress={() => console.log("Search lanzamiento")}
              onSettingsPress={() => console.log("Settings lanzamiento")}
            />
          ),
          }}
      />
      <Stack.Screen
        name={screen.user.users} // Nombre de la nueva pantalla
        component={UsersScreen}
        options={{ title: "User Screen" }}
      />
     
    </Stack.Navigator>
  );
}

