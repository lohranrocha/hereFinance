import { View, Text } from 'react-native';
import { style } from "@/components/extract/style";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Movement } from './movement';

export function Extract(){
  return(
    <View style={style.container}>
      <View style={style.headerExtract}>
          <Text style={style.txtTitle}>Extrato</Text> 
          <MaterialIcons name="arrow-drop-down" size={34} color="white" />
      </View>

      <Movement />
      <Movement />
      <Movement />


    </View>
  )
}