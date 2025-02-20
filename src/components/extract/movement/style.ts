import { StyleSheet } from "react-native";
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
  container: {
    padding: 15,
    height: 50,
    
  },
  headerExtract: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   
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