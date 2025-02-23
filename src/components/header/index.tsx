import { View, Text, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { style } from '@/components/header/style'
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export function Header(){
  const today = new Date();
  const getWeekday = () => {
      const days = ['Domingo', 'Segunda-feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']; 
      return days[today.getDay()];
  }

  const [notify, setNotify] = useState(false)
 
  function showNotify() {
    setNotify(prevState => !prevState)

  }

return(

  <View style={style.contentHeader}>
            <View style={style.blockOneHeader}>
                <View style={style.contentUser}>
                    <Text style={style.txtWelcome}>{getWeekday() + ', ' + today.getDate() + '/' + (today.getMonth() + 1)}</Text>
                    <Text style={style.txtUser}>Lohran Rocha</Text>
                </View>

                <TouchableOpacity onPress={showNotify} style={style.btnNotification}>
                    <MaterialIcons style={style.iconNotify}  name={notify ? "notification-add" : "notifications"} size={28} color="white" />
                </TouchableOpacity>
            </View>
        </View>
)} 