import { View, Text, TouchableOpacity} from "react-native";
import { style } from "@/components/balance/style";
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";

type Balance = {
    value: Number;
}
export function Balance(){
    const [ value, setValue ] = useState('5.000,00')
  return(
        <View style={style.blockTwoHeader}>
            <View style={style.blockValue}>
                <Text style={style.txtBalance}>Meu Saldo</Text>
                <Text style={style.txtValue}>R$ {value}</Text>
            </View>

            <TouchableOpacity>
                <Entypo name="eye" size={24} color="black" />
            </TouchableOpacity>
        </View>
  )
};
