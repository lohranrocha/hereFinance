import { View, Text, Pressable} from 'react-native';
import { style } from '@/components/menu/style';
import { ItensMenu } from './ItensMenu';

export function Menu(){
  return(
    <View style={style.container}>
      <ItensMenu />
    </View>
  );
}