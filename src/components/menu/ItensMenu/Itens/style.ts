import { StyleSheet } from "react-native"
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
  menuItem: {
    alignItems: "center",
    gap: 3,
    color: colors.mediumGray,
    fontSize: 14,
    fontWeight: "bold",

  },
  menuItemTitle: {
    color: colors.mediumGray,
    fontSize: 14,
    fontWeight: "bold",
  },

  menuItemTitleStyle: {
    color: colors.mediumGray,
    fontSize: 14,
    fontWeight: "bold",
  },
  menuItemTitleSelected: {
    fontWeight: "bold",
    color: colors.primaryGreen[200],
  }

});