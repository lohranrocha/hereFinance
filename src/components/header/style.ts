import { StyleSheet } from "react-native"
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
contentHeader: {
    paddingTop: 80,
    height: 160,
  },
  blockOneHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  contentUser: {
  },
  txtWelcome: {
    color: colors.mediumGray,
    fontSize: 18,
    marginBottom: 5    
  },
  txtUser:{
    color: colors.white,
    fontSize: 34,
    fontWeight: "bold",
  },
  btnNotification:{
    marginTop: 20,
    borderRadius: 30,
    marginRight: 10,
  },
  iconNotify: {
    
  },
  btnAddTrans: {},
  txtTransaction: {
    color: colors.white,
  },
});