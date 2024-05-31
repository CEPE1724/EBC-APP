import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TiendaScreen } from "../screens/TiendaScreen";
import { screen } from "../utils";
import HeaderIcons from "../components/HeaderIcons";
const Stack = createNativeStackNavigator();

export function TiendaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.tienda.tiendas}
        component={TiendaScreen}
        options={{ title: "Tienda",
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
    </Stack.Navigator>
  );
}
