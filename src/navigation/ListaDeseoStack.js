import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListaDeseoScreen } from "../screens/ListaDeseoScreen";
import { screen } from "../utils";
import HeaderIcons from "../components/HeaderIcons";
const Stack = createNativeStackNavigator();

export function ListaDeseoStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen
            name={screen.listadeseos.listad}
            component={ListaDeseoScreen}
            options={{
                title: "Lista de Deseos",
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

 