import { colors } from "@/Styles/colors";
import { Stack } from "expo-router";
import { View } from "react-native";
import { Menu } from '@/components/menu'
import { CategoriesProvider } from "@/context/CategoriesContext";

export default function Layout(){

  const backgroundColor = colors.darkGray;

  return (
    <CategoriesProvider>
    
      <View style={{ flex: 1, backgroundColor: colors.black }}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor },
            }}
            />
          
            <Menu />
      </View>
    </CategoriesProvider>
  )
}