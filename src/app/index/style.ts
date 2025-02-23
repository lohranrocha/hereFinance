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
  btnEntry: {
    backgroundColor: colors.lightBlue,
    padding: 15,
    borderRadius: 25,
    width: "48%",
    alignItems: "center",
  },
  btnExit: {
    backgroundColor: colors.lightRed,
    color: colors.white,
    padding: 15,
    borderRadius: 25,
    width: "48%",
    alignItems: "center",
  },
  boxDash: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
    marginBottom: 5,
  },
  boxGoals: {
    backgroundColor: colors.mediumGray,
    height: 140,
    width: "48%",
    padding: 30,

    borderRadius: 25, 
    
  },
  boxGoals2: {
    backgroundColor: colors.pastelGreen,
    height: 140,
    width: "48%",
    padding: 30,
    
    borderRadius: 25, 
    
  },
});