import { View } from "react-native";
import { style } from "@/app/index/style"
import { Balance } from '@/components/balance';
import { Extract } from "@/components/extract";
import { Header } from "@/components/header";
import { TransactionButtons } from "@/components/transactionButtons";


export default function Index(){
    return(
        <View style={style.container}> 
            <Header />        
            <Balance />
     
             <TransactionButtons />
             
            <Extract />
        
        </View>
    )
}