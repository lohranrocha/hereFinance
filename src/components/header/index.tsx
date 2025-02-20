import { View, Text, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { style } from '@/components/header/style'

export function Header(){
  const today = new Date();
  const getWeekday = () => {
      const days = ['Domingo', 'Segunda-feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']; 
      return days[today.getDay()];
  }
return(

  <View style={style.contentHeader}>
            <View style={style.blockOneHeader}>
                <View style={style.contentUser}>
                    <Text style={style.txtWelcome}>{getWeekday() + ', ' + today.getDate() + '/' + (today.getMonth() + 1)}</Text>
                    <Text style={style.txtUser}>Lohran Rocha</Text>
                </View>

                <TouchableOpacity style={style.btnNotification}>
                    <Ionicons name="notifications" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
)} 