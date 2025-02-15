import { colors } from "@/Styles/colors";
import { Stack } from "expo-router";

export default function Layout(){

  const backgroundColor = colors.darkGray;

  return <Stack 
  screenOptions={{
    headerShown: false,
    contentStyle: {backgroundColor}
  }}/>
}