import { View, Text, TouchableOpacity} from 'react-native';
import { style } from '@/components/menu/ItensMenu/Itens/style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '@/Styles/colors';
import { useState } from 'react';

interface Props {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  isSelected: boolean;
  iconIsSelected: boolean;
  onPress: () => void;
}

export function Itens({icon, title, isSelected, iconIsSelected, onPress}: Props){
      
    const menuItemTitleStyle = isSelected ? style.menuItemTitleSelected : style.menuItemTitle;
    const menuItemIconStyle = iconIsSelected ? colors.pastelGreen : colors.mediumGray;
  
  return(
    <TouchableOpacity onPress={onPress}>
        <View style={style.menuItem}>
          <Ionicons name={icon} size={24} color={menuItemIconStyle} />
          <Text style={menuItemTitleStyle}>{title}</Text>
        </View>
    </TouchableOpacity>
      
  );
}