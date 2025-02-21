import { View, Text } from 'react-native';
import { style } from "@/components/extract/movement/style";

interface Props {
  key: number;
  name: string;
  value: number;
}

export function Movement(props: Props){
  return(
      <View style={style.headerExtract}>
          <Text style={style.txtTitle}>{props.name}</Text>
          <Text style={style.txtValue}>R$ {props.value}</Text>
      </View>

  )
}