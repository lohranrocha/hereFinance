import { StyleSheet } from "react-native"
import { colors } from "@/Styles/colors";


export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    fontFamily: "@/assets/fonts/SF Regular" 
  },
  contentHeader: {
    paddingTop: 100,
    padding: 16,
    borderBottomWidth: 1,
    height: 300
  },
  blockOneHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 15,
    
  },
  contentUser: {
  },
  txtWelcome: {
    color: colors.mediumGray,
    fontSize: 14,
    marginBottom: 4
    
  },
  txtUser:{
    color: colors.white,
    fontSize: 40,
    fontWeight: "bold",
  },
  btnNotification:{
  },
  blockTwoHeader:{
    marginHorizontal: 15,
    paddingTop: 40
  },
  txtBalance:{
    fontSize: 22,
    color: colors.yellowOcre,
    marginBottom: 15
  },
  txtValue:{
    fontWeight: 700,
    fontSize: 45,
    color: colors.white,
  },
  btnAddTrans: {},



});