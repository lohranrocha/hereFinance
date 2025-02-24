import { StyleSheet } from "react-native";
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
   headerExtract: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 32,
  },
  txtTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtValue: {
    color: colors.pastelGreen,
    fontSize: 20,
    fontWeight: 'bold',
  }
  
});