import { StyleSheet } from "react-native"
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    fontFamily: "@/assets/fonts/SF Regular", 
    paddingHorizontal: 25,
  },
  contentButtons: {
    flexDirection: "row",
    marginTop: 15,
    gap: 10,
  },
  btnNewTransfer: {
    backgroundColor: colors.pastelGreen,
    padding: 15,
    borderRadius: 25,
    width: "48%",
    alignItems: "center",
  },
  btnEntry: {
    backgroundColor: colors.lightBlue,
    padding: 15,
    borderRadius: 25,
    width: "48%",
    alignItems: "center",
  },
});