import { StyleSheet } from "react-native";
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
   headerExtract: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 30,
  },
  txtTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtValue: {
    color: colors.pastelGreen,
    fontSize: 18,
    fontWeight: 'bold',
  }
  
});