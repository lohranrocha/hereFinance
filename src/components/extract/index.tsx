import { View, Text, FlatList } from 'react-native';
import { style } from "@/components/extract/style";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Movement } from './movement';

export function Extract(){
  const mock = [
    {key: 1, name: 'Lohran Rocha', value: 5.500},
    {key: 2, name: 'Johnathan', value: 2.000},
    {key: 3, name: 'Douglas', value: 3.200},
    {key: 4, name: 'Geovanna', value: 1.700}, 
    {key: 5, name: 'Roberto', value: 1.700}, 
    {key: 6, name: 'Anderson', value: 1.700}, 
    {key: 7, name: 'Roberto Firmino', value: 11.700}, 
  ]
  const ultimosItens = [...mock].slice(-4);

 

  function renderItem({item}) {
    return (
      <Movement key={item.key} name={item.name} value={item.value} />
    );
  }

  
  return(
    <View style={style.container}>
      <View style={style.headerExtract}>
          <Text style={style.txtTitle}>Extrato</Text> 
          <MaterialIcons name="arrow-drop-down" size={34} color="white" />
      </View>

      <View style={style.movements}>
        <FlatList
        data={ultimosItens}
        keyExtractor={item => item.name}
        renderItem={renderItem}
        />            
      </View>


    </View>
  )
}