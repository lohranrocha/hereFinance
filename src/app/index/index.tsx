import { View, Text, TouchableOpacity } from "react-native";
import { style } from "@/app/index/style"
import Ionicons from '@expo/vector-icons/Ionicons';



export default function index(){
return(
    <View style={style.container}>
    <View style={style.contentHeader}>
    
        <View style={style.blockOneHeader}>
            <View style={style.contentUser}>
                <Text style={style.txtWelcome}>Olá, seja bem vindo(a)</Text>
                <Text style={style.txtUser}>Lohran</Text>
            </View>
            <TouchableOpacity style={style.btnNotification}>
                <Ionicons name="notifications" size={24} color="white" />
            </TouchableOpacity>
        </View>
        
        <View style={style.blockTwoHeader}>
            <Text style={style.txtBalance}>Meu Saldo</Text>
            <Text style={style.txtValue}>R$ 7.783,00</Text>
        </View>
        
        <TouchableOpacity style={style.btnAddTrans}>Nova Transação</TouchableOpacity>

    </View>
    
    
    </View>
)
}