import { View, Modal, Text, TouchableOpacity, TextInput } from "react-native";
import { style } from "@/components/categories/style"
import { Category } from "@/components/categories/category";
import { useCategories } from "@/context/CategoriesContext";
import { FlatList } from "react-native";

export function Categories(){
  const { categories } = useCategories();

  return(
        <View style={style.container}> 
          <FlatList 
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <Category icon={item.icon} category={item.name}/>
            )}
            horizontal={true}
            
          />
        </View>
    )
}