import { View, Text, TouchableOpacity} from "react-native";
import { style } from "@/components/balance/style";
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";


export function Balance(){
    const [ value, setValue ] = useState('6.500,00')
    const [ showHideBalance, setShowHideBalance] = useState(true)

    const handleToggleBalance = () => {
        setShowHideBalance(!showHideBalance)
        showHideBalance? setValue('6.500,00') : setValue('**********')
    }

  return(
        <View style={style.blockTwoHeader}>
            <View style={style.blockValue}>
                <Text style={style.txtBalance}>Meu Saldo</Text>
                <Text style={style.txtValue}>R$ {value}</Text>
            </View>

            <TouchableOpacity onPress={handleToggleBalance}>
                <Entypo name={showHideBalance? "eye-with-line" : "eye"} size={24} color="black" />
            </TouchableOpacity>
        </View>
        
 )
};
