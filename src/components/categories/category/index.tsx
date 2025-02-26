import { View, Modal, Text, TouchableOpacity, TextInput } from "react-native";
import { style } from "@/components/categories/category/style"
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/Styles/colors";

interface Props {
    icon: keyof typeof Ionicons.glyphMap;
    category: string;
}

export function Category({icon, category}: Props){
     
    return(
        <TouchableOpacity style={style.container}> 
            <View style={style.categoryCircle}>
              <Ionicons name={icon} size={26} color={colors.white}/>
            </View>
            <Text style={style.txtCategory}>{category}</Text>
        </TouchableOpacity>
    )
}