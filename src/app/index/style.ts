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
    marginTop: 13,
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

  modal:{
    flex: 1,
    width: "94%",
    margin: "auto",
    justifyContent: 'flex-start',
    marginTop: 145
  },
  modalContent:{
    borderRadius: 25,
    backgroundColor: colors.psDarkGray,
    paddingVertical: 24,
    paddingHorizontal: 18
    
  },
  modalHeader:{
    borderBlockColor: colors.mediumGray,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 32

  },
  modalTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.lightGray
  },
  modalCloseIcon: {
    
  },
  modalTypeOfTransaction: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    backgroundColor: colors.psMediumGray,
    borderRadius: 10,
    padding: 8,
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

});