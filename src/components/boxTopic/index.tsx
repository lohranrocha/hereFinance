import { View, Text, ViewStyle } from "react-native";
import { style } from '@/components/boxTopic/style'

interface Props {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export function BoxTopic(props: Props){
  return(
    <View style={props.style}>
      <Text style={style.titleBox}>{props.title}</Text>
    </View>
    

  )
}