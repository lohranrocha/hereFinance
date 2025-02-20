import { StyleSheet } from "react-native"
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
  blockTwoHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 25,
    backgroundColor: colors.lightPurple,
    borderRadius: 25
  },
  blockValue: {
    flexDirection: "column",
},
  txtBalance:{
    fontSize: 22,
    color: colors.purple,
    fontWeight: "bold",
    marginBottom: 10
  },
  txtValue:{
    fontWeight: 700,
    fontSize: 45,
    color: colors.black
  },
});