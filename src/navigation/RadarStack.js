import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RadarScreen } from "../screens/RadarScreen";
import { screen } from "../utils";
import HeaderIcons from "../components/HeaderIcons";
const Stack = createNativeStackNavigator();

export function RadarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.radar.radars}
        component={RadarScreen}
        options={{
          title: "Radar",
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
