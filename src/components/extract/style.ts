import { StyleSheet } from "react-native";
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGray,
    padding: 10,
    height: 200,
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
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  
});