import { View, Text, TouchableOpacity} from 'react-native';
import { style } from '@/components/menu/ItensMenu/style';
import { Itens } from './Itens';
import { colors } from '@/Styles/colors'
import { useState } from 'react';


export function ItensMenu(){
   const [selectedItem, setSelectedItem] = useState<string | null>(null);
   const [iconSelectedItem, setIconSelectedItem] = useState<string | null>(null); 
     
   function handleChangeStyle(name1: string, name2: string){      
        setSelectedItem(name1)
        setIconSelectedItem(name2)
      }


  return(
    <View style={style.container}>
    
        <Itens  icon='wallet-outline' isSelected={selectedItem === "Carteira"} iconIsSelected={iconSelectedItem === "wallet-outline"} title='Carteira' onPress={() => handleChangeStyle("Carteira", "wallet-outline")}/>

        <Itens  icon='clipboard-outline'  title='Extrato' isSelected={selectedItem === "Extrato"} iconIsSelected={iconSelectedItem === "clipboard-outline"} onPress={() => handleChangeStyle("Extrato", "clipboard-outline")}/>
     
        <Itens  icon='analytics-outline'  title='Insight'isSelected={selectedItem === "Insight"} iconIsSelected={iconSelectedItem === "analytics-outline"}  onPress={() => handleChangeStyle("Insight", "analytics-outline")}/>
      
        <Itens icon='aperture'  title='Objetivos'  isSelected={selectedItem === "Objetivos"} iconIsSelected={iconSelectedItem === "aperture"} onPress={() => handleChangeStyle("Objetivos", "aperture")}/>
     
        <Itens icon='person' title='Perfil' isSelected={selectedItem === "Perfil"} iconIsSelected={iconSelectedItem === "person"} onPress={() => handleChangeStyle("Perfil","person")}/>
    
    </View>
  );
}