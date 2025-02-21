import { View } from "react-native";
import { style } from "@/app/index/style"
import { Balance } from '@/components/balance';
import { Extract } from "@/components/extract";
import { Header } from "@/components/header";
import { TransactionButtons } from "@/components/transactionButtons";

function testButtons() {
   console.log("Testing buttons");
}

export default function Index(){
 
    return(
        <View style={style.container}> 
            <Header />        
            <Balance />
     
            <View style={style.contentButtons}>
                <TransactionButtons style={style.btnEntry} title="Saída" onPress={testButtons}  />
                <TransactionButtons style={style.btnNewTransfer} onPress={testButtons} title="Entradas" />
            </View>
             
            <Extract />
        
        </View>
    )
}