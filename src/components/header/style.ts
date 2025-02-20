import { StyleSheet } from "react-native"
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
contentHeader: {
    paddingTop: 80,
    height: 145,
  },
  blockOneHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  contentUser: {
  },
  txtWelcome: {
    color: colors.mediumGray,
    fontSize: 14,
    marginBottom: 5    
  },
  txtUser:{
    color: colors.white,
    fontSize: 27,
    fontWeight: "bold",
  },
  btnNotification:{
  },
  btnAddTrans: {},
  txtTransaction: {
    color: colors.white,
  },
});