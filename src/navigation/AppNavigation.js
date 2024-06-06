import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import {CarritoStack} from "./CarritoStack"
import { LanzamientoStack } from "./LanzamientoStack";
import {TiendaStack } from "./TiendaStack"
import {ListaDeseoStack} from "./ListaDeseoStack"
import { RadarStack } from "./RadarStack";
import { screen } from "../utils/screenName";
import {UsersScreen} from "../screens/UsersScreen/UsersScreen"

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >

      <Tab.Screen
        name={screen.lanzamiento.tab}
        component={LanzamientoStack}
        options={{ title: "" }}
      />
      <Tab.Screen
        name={screen.tienda.tab}
        component={TiendaStack}
        options={{ title: "" }}
      />
      <Tab.Screen
        name={screen.listadeseos.tab}
        component={ListaDeseoStack}
        options={{ title: "" }}
      />
      <Tab.Screen
        name={screen.carrito.tab}
        component={CarritoStack}
        options={{ title: "" }}
      />
      <Tab.Screen
        name={screen.radar.tab}
        component={RadarStack}
        options={{ title: "" }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;

  if (route.name === screen.lanzamiento.tab) {
    iconName = "fire";
  }
  if (route.name === screen.tienda.tab) {
    iconName = "text-search";
  }
  if (route.name === screen.listadeseos.tab) {
    iconName = "heart-outline";
  }
  if (route.name === screen.carrito.tab) {
    iconName = "bag-personal-outline";
  }
  if (route.name === screen.radar.tab) {
    iconName = "radar";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
