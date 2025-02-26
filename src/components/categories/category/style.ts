import { StyleSheet } from "react-native"
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
  container: {
    width: 70,
    alignItems: "center",
    gap: 6,
    marginTop: 10,
    marginHorizontal: 5,
  },
  categoryCircle: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: colors.basicGray[400],
    justifyContent: "center",
    alignItems: "center",
  },
  txtCategory: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
  }
   
})