import { StyleSheet } from "react-native"
import { colors } from "@/Styles/colors";

export const style = StyleSheet.create({
  modalTypeOfTransaction: {
    flexDirection: 'row',
    justifyContent: 'center',

    borderBottomWidth: 1,
    borderColor: colors.basicGray[500],
    paddingBottom: 15,
    paddingHorizontal: 16,
    marginBottom: 16,
  }, 
  btnExpense: {
    fontSize: 16,
    color: colors.white,

  },
  btnIncome: {
    fontSize: 16,
    color: colors.white,
  }, 
  btnTransfer: {
    fontSize: 16,
    color: colors.white,
  },
  primaryButton: {
    backgroundColor: colors.basicGray[400],
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  primarySelectedButton: {
    backgroundColor: colors.basicGray[300],
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  secondaryButton: {
    backgroundColor: colors.basicGray[400],
    paddingHorizontal: 22,
    paddingVertical: 8
  },
  secondarySelectedButton: {
    backgroundColor: colors.basicGray[300],
    paddingHorizontal: 22,
    paddingVertical: 8
  },
  tertiaryButton: {
    backgroundColor: colors.basicGray[400],
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  tertiarySelectedButton: {
    backgroundColor: colors.basicGray[300],
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  }


});