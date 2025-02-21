import { View, Text, TouchableOpacity, ViewStyle } from "react-native";
import { style } from "@/components/transactionButtons/style"


interface Props {
    title: string;
    onPress?: () => void;
    style?: ViewStyle;
}

export function TransactionButtons(props: Props){
    
    return(
                <TouchableOpacity style={props.style}>
                    <Text style={style.txtTransfer}>{props.title}</Text> 
                </TouchableOpacity>       
            
        
    )
}