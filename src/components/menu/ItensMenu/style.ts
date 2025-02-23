import { StyleSheet } from "react-native"
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  itemSelected: {
    color: colors.pastelGreen
  }
}); 