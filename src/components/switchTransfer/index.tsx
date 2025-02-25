import { View, Modal, Text, TouchableOpacity } from "react-native";
import { style } from "@/components/switchTransfer/style";
import { useState } from "react";

export default function SwitchTransfer(){
    const [typeEntry, setTypeEntry] = useState('Despesas')

    let ifExpense = style.primaryButton;
    let ifIncome = style.secondaryButton;
    let ifTransfer = style.tertiaryButton;

    function handleSetTypeEntry(name: string){
       setTypeEntry(name)
      }

      if(typeEntry === "despesas"){
        ifExpense =  typeEntry ? style.primarySelectedButton : style.primaryButton;
      } else if(typeEntry === "receitas"){
        ifIncome = typeEntry ? style.secondarySelectedButton : style.primaryButton;
      } else {
        ifTransfer = typeEntry ? style.tertiarySelectedButton : style.primaryButton;
      }
      

    return(
       
          <View style={style.modalTypeOfTransaction}> 
              <TouchableOpacity onPress={() => handleSetTypeEntry('despesas')} style={ifExpense}>
                  <Text style={style.btnExpense}>
                      Despesas
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSetTypeEntry('receitas')} style={ifIncome}>
                  <Text style={style.btnIncome}>
                      Receitas
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSetTypeEntry('transferencia')} style={ifTransfer}>
                  <Text style={style.btnTransfer}>
                      Transferência
                  </Text>
              </TouchableOpacity>
          </View>


                 
    )
}