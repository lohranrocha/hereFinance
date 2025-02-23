import { StyleSheet } from "react-native"
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
  container: {

    position: 'fixed',
    alignSelf: 'center', 
    justifyContent: 'center',
    height: 60,
    width: '95%',
    marginBottom: 30,
    backgroundColor: colors.darkGray,
    paddingHorizontal: 25,
    borderRadius: 18,
    borderEndStartRadius: 35,
    borderEndEndRadius: 35,

  },
});