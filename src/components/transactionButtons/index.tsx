import { View, Text, TouchableOpacity } from "react-native";
import { style } from "@/components/transactionButtons/style"


export function TransactionButtons(){
    return(
        
            <View style={style.actionBlock}>
                <TouchableOpacity style={style.btnNewTransfer}>
                    <Text style={style.txtTransfer}>Saídas</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={style.btnNewEntry}>
                    <Text style={style.txtEntry}>Entradas</Text> 
                </TouchableOpacity>       
            </View>
            
        
    )
}