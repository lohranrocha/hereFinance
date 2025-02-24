import { StyleSheet } from "react-native";
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGray,
    padding: 10,
    height: 240,
    marginTop: 15,
    borderRadius: 25,
    overflow: "hidden",
  },
  headerExtract: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBlockColor: colors.lightmediumGray,
  },
  movements: {
    paddingVertical: 18,
    paddingTop: 22,
  },
  txtTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colors.white,
  },
  
});