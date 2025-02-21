import { StyleSheet } from "react-native"
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
   btnNewTransfer: {
    backgroundColor: colors.lightBlue,
    padding: 15,
    borderRadius: 25,
    width: "48%",
    alignItems: "center",
  },
  btnNewEntry: {
    backgroundColor: colors.pastelGreen,
    padding: 15,
    borderRadius: 25,
    width: "47%",
    alignItems: "center",
  },
  txtTransfer: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
   },
  txtEntry: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold"
  },
});