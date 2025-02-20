import { View, Text } from 'react-native';
import { style } from "@/components/extract/movement/style";

export function Movement(){
  return(
    <View style={style.container}>
      <View style={style.headerExtract}>
          <Text style={style.txtTitle}>Lohran Rocha</Text>
          <Text style={style.txtValue}>R$ 5.500,00</Text>
      </View>

    </View>
  )
}